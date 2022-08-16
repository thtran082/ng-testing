import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-guard-modal",
  templateUrl: "./guard-modal.component.html",
  styleUrls: ["./guard-modal.component.scss"]
})
export class GuardModalComponent implements OnInit {
  @Input() inputData: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
