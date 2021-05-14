// export function tonext() {
//   if (index == 2) {
//     index = 0;
//   } else {
//     index += 1;
//   }
//   showimg = [false, false, false];
//   showimg[this.index] = true;
// }

function chart(bgimgElement, backBtn, nextBtn, chartAll) {
  let rcindex = 0;
  let rcleftindex = 1;
  let rcrightindex = 2;

  const rcnext = function () {
    rcnextp(bgimgElement, rcindex, rcleftindex, rcrightindex);
    const temp = rcindex;
    rcindex = rcleftindex;
    rcleftindex = rcrightindex;
    rcrightindex = temp;
    rcnextp(bgimgElement, rcindex, rcleftindex, rcrightindex);
  }

  const rcback = function () {
    rcbackp();
    const temp = rcindex;
    rcindex = rcrightindex;
    rcrightindex = rcleftindex;
    rcleftindex = temp;
    rcbackp();
  }

  const rcbackp = function () {
    $(bgimgElement).eq(rcindex).animate({
      'left': '0',
      'transition': 'right 3s ease-in',
    });

    $(bgimgElement).eq(rcindex).css({
      'z-index': '11',
    });

    $(bgimgElement).eq(rcleftindex).css({
      'left': '0',
      'z-index': '10',
      'transition': 'none',
    });

    $(bgimgElement).eq(rcrightindex).css({
      'z-index': '10',
      'left': '100%',
      'transition': 'none',
    });
  }

  let time = 0;
  let rctimer;
  rctimer = setInterval(function () {
    time++;
    if (time == 50) {
      time = 0;
      rcnext(bgimgElement, rcindex, rcleftindex, rcrightindex);
    }
  }, 100)


  $(backBtn).on({
    click: function () {
      time = 0;
      rcback();
    }
  });

  $(nextBtn).on({
    click: function () {
      time = 0;
      rcnext(bgimgElement, rcindex, rcleftindex, rcrightindex);
    }
  })

  $(chartAll).on({
    mouseenter: function () {
      $(backBtn).show(500);
      $(nextBtn).show(500);
      clearInterval(rctimer);
      time = 0;
    },
    mouseover: function () {
      $(backBtn).show(500);
      $(nextBtn).show(500);
      clearInterval(rctimer);
      time = 0;
    },
    mouseleave: function () {
      clearInterval(rctimer);
      rctimer = setInterval(function () {
        time++;
        if (time == 50) {
          time = 0;
          rcnext(bgimgElement, rcindex, rcleftindex, rcrightindex);
        }
      }, 100)
      $(backBtn).hide(500);
      $(nextBtn).hide(500);
    },
  })

}

//下一张图片的轮播 在刷新页面的时候会用到
function rcnextp(bgimgElement, rcindex, rcleftindex, rcrightindex) {
  $(bgimgElement).eq(rcindex).animate({
    'left': '0',
    'transition': 'left 3s ease-in',
  });

  $(bgimgElement).eq(rcindex).css({
    'z-index': '11',
  });

  $(bgimgElement).eq(rcleftindex).css({
    'z-index': '10',
    'left': '-100%',
    'transition': 'none',
  });

  $(bgimgElement).eq(rcrightindex).css({
    'z-index': '10',
    'left': '0',
    'transition': 'none',
  });
}