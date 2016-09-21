$(document).ready(function(){
	var oli = $("#aside ul li");
	var section = $("#section");
	var ospan = $("#aside ul li span");

	oli.on("click",function(){
		var index = oli.index($(this)[0]);
		var height = (-index*100)+"%";
		$("#aside ul li i").removeClass("fa-circle").addClass("fa-circle-thin");
		$("#aside ul li i").eq(index).removeClass("fa-circle-thin").addClass("fa-circle");
		$("#section>div").removeClass("current_page").eq(index).addClass("current_page");
		section.animate({
			top:height
		},700);
	});

	oli.hover(function(){
		var index1 = oli.index($(this)[0]);
		ospan.eq(index1).animate({
			left: "-70px",
			opacity:'1'
		},200);
	},function(){
		var index1 = oli.index($(this)[0]);
		ospan.eq(index1).animate({
			left: "-50px",
			opacity: "0"
		},200);
	});

	$(document).on("mousewheel",function(event,delta){
		var num = $("#aside ul li i").index($("#aside ul li i.fa-circle"));
		var top = $("section").css("top");
		var top_num = top.replace(/[^0-9]/ig,"");
		var height = $(document).height()

		if(delta == 1 && num != 0 && !($("#section").is(":animated"))){
			section.animate({
				top:"+=100%"
			},700,function(){
				$("#aside ul li i").removeClass("fa-circle").addClass("fa-circle-thin");
				$("#aside ul li i").eq(num-1).removeClass("fa-circle-thin").addClass("fa-circle");
			});
			$("#section>div").removeClass("current_page").eq(num-1).addClass("current_page");
		}else if(delta == -1 && num != 4 && !($("#section").is(":animated"))){
			section.animate({
				top:"-=100%"
			},700,function(){
				$("#aside ul li i").removeClass("fa-circle").addClass("fa-circle-thin");
				$("#aside ul li i").eq(num+1).removeClass("fa-circle-thin").addClass("fa-circle");
			});
			$("#section>div").removeClass("current_page").eq(num+1).addClass("current_page");
		}
	})
})