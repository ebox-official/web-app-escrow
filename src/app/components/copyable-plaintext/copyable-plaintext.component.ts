import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { ToasterService } from '../toaster/toaster.service';

@Component({
  selector: 'app-copyable-plaintext',
  template: `
    <style>
      :host {
        display: inline-flex;
        align-items: center;
        height: 1.3rem;
        border-bottom: 1px solid #0000;
      }
      :host:hover {
        border-bottom: 1px dashed;
      }
      .copyable-plaintext {
        font-size: 1rem;
      }
      .copyable-plaintext.xs {
        font-size: .75rem;
      }
      .copyable-plaintext.sm {
        font-size: .8rem;
      }
      .copyable-plaintext.lg {
        font-size: 1.3rem;
      }
      @media (max-width: 767px) {
        .copyable-plaintext {
          font-size: .9rem;
        }
        .copyable-plaintext.xs {
          font-size: .65rem;
        }
        .copyable-plaintext.sm {
          font-size: .7rem;
        }
        .copyable-plaintext.lg {
          font-size: 1.2rem;
        }
      }
    </style>
    <span class="copyable-plaintext text-truncate font-monospace pointer" [class.xs]="size === 'xs'" [class.sm]="size === 'sm'" [class.lg]="size === 'lg'"><i class="bi bi-clipboard"></i> {{ mask || value }}</span><input #input hidden type="text" readonly [value]="value">
  `
})
export class CopyablePlaintextComponent implements OnInit {

  @Input("value") value; // Value copied to the user's clipboard
  @Input("mask") mask; // Value shown to the user
  @Input("size") size; // Possibilities: xs, sm, lg
  @Input("message") message = "Copied successfully!";

  @ViewChild("input") input;

  constructor(private toasterService: ToasterService) { }

  @HostListener("click")
  copy() {
    this.input.nativeElement.select();
    navigator.clipboard.writeText(this.input.nativeElement.value);
    this.toasterService.addToaster({ color: "success", message: this.message });
  }

  ngOnInit() {
  }

}
