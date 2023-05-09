import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-index-header',
  templateUrl: './index-header.component.html',
  styleUrls: ['./index-header.component.scss']
})
export class IndexHeaderComponent {

  ngOnInit() {
    $(window).scroll(function () {
      var header = $(document).scrollTop()
      var headerHeight = $(".gro-header-wrap").outerHeight();
      var firstSection = $(".invisible-wrap").outerHeight();
      if (header > headerHeight) {
        $(".gro-header-wrap").addClass("fixed");
      } else {
        $(".gro-header-wrap").removeClass("fixed");
      }
      if (header > firstSection) {
        $(".gro-header-wrap").addClass("in-view");
      } else {
        $(".gro-header-wrap").removeClass("in-view");
      }
    })

    $(document).ready(function () {
      $('#nav-icon3').click(function () {
        $(this).toggleClass('open');
      });
    });
  }

}
