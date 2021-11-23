import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-toast',
  template: `
    <div #toast class="toast align-items-center text-white border-0" role="alert">
      <div class="d-flex">
        <div class="toast-body">{{ toastMessage.message }}</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  `
})
export class ToastComponent implements OnInit, AfterViewInit {

  @Input("toast-message") toastMessage;

  @ViewChild("toast") toast;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.toast.nativeElement.classList.add("bg-" + this.toastMessage.color);
    let bsToast = new window["bootstrap"].Toast(this.toast.nativeElement);
    bsToast.show();
    bsToast._element.addEventListener(
      "hidden.bs.toast",
      () => bsToast._element.parentElement.remove()
    );
  }

}
