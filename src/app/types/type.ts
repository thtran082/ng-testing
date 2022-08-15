import { isObservable, Observable, of, Subject, Subscription } from "rxjs";
import { takeUntil } from "rxjs/operators";

type User = {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

type Admin = {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
  { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
  { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
  { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
  { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
  { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
  { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];

/**
 *
 * ============================================================
 *
 */

 function logPerson<T extends Person>(person: T): void {
  console.log(
      ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
  );
}

function filterPerson(persons: Person[], critical: Partial<Admin> & {type: 'admin'}): Admin[];
function filterPerson(persons: Person[], critical: Partial<User> & {type: 'user'}): User[];
function filterPerson(persons: Person[], critical: Partial<Person>): Person[] {
  return persons
    .filter((person) => {
      const criticalKeys = Object.keys(critical) as (keyof Person)[];
      return criticalKeys.every((key) => person[key] === critical[key]);
    });
}


function newFilterPerson
  <
    T extends Person, 
    R extends Partial<T> & { type: T['type'] }, 
    ReturnType = R['type'] extends 'admin' ? Admin[] : User[]
  >
  (persons: T[], critical: R): ReturnType {
    return persons
      .filter((person) => {
        const criticalKeys = Object.keys(critical) as (keyof Person)[];
        return criticalKeys.every((key) => person[key] === critical[key]);
      }) as unknown as ReturnType;
}

const usersOfAge23 = filterPerson(persons, { age: 23, type: 'admin' });
console.log("before");
usersOfAge23.forEach(logPerson);
console.log("-----------------------------------------------------");

const newUsersOfAge23 = newFilterPerson(persons, { age: 23, type: 'admin' });
console.log("after");
newUsersOfAge23.forEach(logPerson);

function effect<
// This type quickly became part of effect 'API'
ProvidedType = void,
// The actual origin$ type, which could be unknown, when not specified
OriginType extends
  | Observable<ProvidedType>
  | unknown = Observable<ProvidedType>,
// Unwrapped actual type of the origin$ Observable, after default was applied
ObservableType = OriginType extends Observable<infer A> ? A : never,
// Return either an optional callback or a function requiring specific types as inputs
ReturnType = ProvidedType | ObservableType extends void
  ? (
      observableOrValue?: ObservableType | Observable<ObservableType>
    ) => Subscription
  : (
      observableOrValue: ObservableType | Observable<ObservableType>
    ) => Subscription
>(generator: (origin$: OriginType) => Observable<unknown>): ReturnType {
const origin$ = new Subject<ObservableType>();
generator(origin$ as OriginType)
  // tied to the lifecycle 👇 of ComponentStore
  .pipe(takeUntil(this.destroy$))
  .subscribe();

return ((
  observableOrValue?: ObservableType | Observable<ObservableType>
): Subscription => {
  const observable$ = isObservable(observableOrValue)
    ? observableOrValue
    : of(observableOrValue);
  return observable$.pipe(takeUntil(this.destroy$)).subscribe((value) => {
    // any new 👇 value is pushed into a stream
    origin$.next(value as ObservableType);
  });
}) as unknown as ReturnType;
}