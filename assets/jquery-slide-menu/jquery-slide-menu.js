// Product by webproducer.ir@gmail.com

(function ($) {
  const OCMenu = function (element, speed, expand) {
    element.html('<i class="fa fa-cogs fa-lg"></i>');

    if (typeof expand !== 'undefined') {
      element.data('expand', expand);
    } else {
      element.data('expand', !element.data('expand'));
    }

    if (element.data('expand')) {
      element.parent().animate({ left: '0px' }, {
        duration: speed,
        start: function () {
          element.find('.fa').removeClass('fa-cogs');
          element.find('.fa').addClass('fa-arrow-left');
        }
      });
    } else {
      element.parent().animate({ left: '-200px' }, {
        duration: speed,
        start: function () {
          element.find('.fa').addClass('fa-cogs');
          element.find('.fa').removeClass('fa-arrow-left');
        }
      });
    }
  };

  const slideToggleUD = function (element, speed, isUp) {
    element.siblings('.body-slide').animate({
      display: 'block',
      height: isUp ? 'hide' : 'show'
    }, {
      duration: speed,
      start: function () {
        const title = element.text();
        const icon = isUp ? 'fa-plus-square' : 'fa-minus-square';
        element.html('<i class="fa ' + icon + '"></i> ' + title);
      }
    });
  };

  const collapse = function (element, elements, data, speed) {
    if (!data) {
      if (!element.data('collapse')) {
        slideToggleUD(element, speed, true);
      } else {
        slideToggleUD(element, speed, false);
      }
      element.data('collapse', !element.data('collapse'));
    } else {
      if (element.data('collapse')) {
        slideToggleUD(element, speed, true);
      } else {
        elements.each(function () {
          if ($(this).data('index') != element.data('index')) {
            slideToggleUD($(this), speed, true);
            $(this).data('collapse', false);
          }
        });
        slideToggleUD(element, speed, false);
      }
      element.data('collapse', !element.data('collapse'));
    }
  };

  const collapsed = function (element, data) {
    if (data) {
      if (element.data('index') == 0) {
        slideToggleUD(element, 100, false);
        element.data('collapse', data);
      } else {
        slideToggleUD(element, 100, true);
        element.data('collapse', !data);
      }
    } else {
      if (element.data('index') == 0) {
        slideToggleUD(element, 100, false);
        element.data('collapse', data);
      } else {
        slideToggleUD(element, 100, true);
        element.data('collapse', !data);
      }
    }
  };

  $.fn.SlideMenu = function (settings) {
    const collection = this;
    const config = {
      speedLR: 500,
      speedUD: 500,
      expand: false,
      collapse: true
    };

    if (settings) { $.extend(config, settings); }

    return this.each(function () {
      const self = $(this);
      const elements = {
        btnSlide: self.find('.btn-slide'),
        headSlide: self.find('.head-slide')
      };

      elements.btnSlide.each(function () {
        const $this = $(this);

        OCMenu($this, config.speedLR, config.expand);

        $this.click(function () { OCMenu($this, config.speedLR); });
      });

      elements.headSlide.each(function (index) {
        const $this = $(this);

        $this.data('index', index);
        collapsed($this, config.collapse);

        $this.click(function () {
          collapse($this, elements.headSlide, config.collapse, config.speedUD);
        });
      });
    });
  };

  $.fn.Modal = function (settings) {
    const config = {
    };

    if (settings) { $.extend(config, settings); }
  };
})(jQuery);
