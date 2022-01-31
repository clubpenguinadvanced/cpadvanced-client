import { SimpleButton, Button, Interactive, Pricetag, Name } from '@components/components'

import Book from '@scenes/interface/books/Book'
import ColorButton from './buttons/ColorButton'
import FlagButton from './buttons/FlagButton'
import PhotoButton from './buttons/PhotoButton'
import Tag1 from './buttons/Tag1'
import Tag2 from './buttons/Tag2'

/* START OF COMPILED CODE */

export default class ClothingCatalog extends Book {

	constructor() {
		super("ClothingCatalog");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("clothingcatalog-pack", "assets/media/interface/catalogs/clothing/clothingcatalog-pack.json");
	}

	/** @returns {void} */
	_create() {

		// blocker
		const blocker = this.add.rectangle(760, 480, 1520, 960);

		// container
		const container = this.add.container(0, 0);

		// page20
		const page20 = this.add.container(0, 0);
		page20.visible = false;
		container.add(page20);

		// page21Bg
		const page21Bg = this.add.image(760, 480, "jan22clothing", "page0021");
		page20.add(page21Bg);

		// closeBtn_3
		const closeBtn_3 = this.add.ellipse(1146, 58, 50, 50);
		closeBtn_3.fillColor = 2551787;
		closeBtn_3.fillAlpha = 0.5;
		page20.add(closeBtn_3);

		// lastPagebtn
		const lastPagebtn = this.add.rectangle(487, 760, 75, 200);
		lastPagebtn.angle = -30;
		lastPagebtn.fillColor = 2551787;
		lastPagebtn.fillAlpha = 0.5;
		page20.add(lastPagebtn);

		// page19
		const page19 = this.add.container(0, 0);
		page19.visible = false;
		container.add(page19);

		// page20_bg
		const page20_bg = this.add.image(760, 480, "jan22clothing", "page0020");
		page19.add(page20_bg);

		// page20_header
		const page20_header = this.add.text(184, 82, "", {});
		page20_header.setOrigin(0.5, 0.5);
		page20_header.text = "Player card flags\nfor everyone";
		page20_header.setStyle({ "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold italic" });
		page19.add(page20_header);

		// flag_name_7186
		const flag_name_7186 = this.add.text(325, 163, "", {});
		flag_name_7186.setOrigin(0.5, 0.5);
		flag_name_7186.text = "Latvia";
		flag_name_7186.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_7186);

		// flag_name_7187
		const flag_name_7187 = this.add.text(430, 164, "", {});
		flag_name_7187.setOrigin(0.5, 0.5);
		flag_name_7187.text = "Slovenia";
		flag_name_7187.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_7187);

		// flag_name_7188
		const flag_name_7188 = this.add.text(545, 165, "", {});
		flag_name_7188.setOrigin(0.5, 0.5);
		flag_name_7188.text = "Gibraltar";
		flag_name_7188.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_7188);

		// flag_name_7189
		const flag_name_7189 = this.add.text(659, 164, "", {});
		flag_name_7189.setOrigin(0.5, 0.5);
		flag_name_7189.text = "Malta";
		flag_name_7189.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_7189);

		// flag_name_7185
		const flag_name_7185 = this.add.text(203, 284, "", {});
		flag_name_7185.setOrigin(0.5, 0.5);
		flag_name_7185.text = "Pakistan";
		flag_name_7185.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_7185);

		// flag_name_7184
		const flag_name_7184 = this.add.text(318, 282, "", {});
		flag_name_7184.setOrigin(0.5, 0.5);
		flag_name_7184.text = "Czechia";
		flag_name_7184.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_7184);

		// flag_name_7183
		const flag_name_7183 = this.add.text(432, 284, "", {});
		flag_name_7183.setOrigin(0.5, 0.5);
		flag_name_7183.text = "Croatia";
		flag_name_7183.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_7183);

		// flag_name_7182
		const flag_name_7182 = this.add.text(538, 284, "", {});
		flag_name_7182.setOrigin(0.5, 0.5);
		flag_name_7182.text = "Greece";
		flag_name_7182.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_7182);

		// flag_name_7148
		const flag_name_7148 = this.add.text(652, 284, "", {});
		flag_name_7148.setOrigin(0.5, 0.5);
		flag_name_7148.text = "Romania";
		flag_name_7148.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_7148);

		// flag_name_504
		const flag_name_504 = this.add.text(652, 406, "", {});
		flag_name_504.setOrigin(0.5, 0.5);
		flag_name_504.text = "Belgium";
		flag_name_504.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_504);

		// flag_name_7096
		const flag_name_7096 = this.add.text(538, 406, "", {});
		flag_name_7096.setOrigin(0.5, 0.5);
		flag_name_7096.text = "Austria";
		flag_name_7096.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_7096);

		// flag_name_502
		const flag_name_502 = this.add.text(430, 406, "", {});
		flag_name_502.setOrigin(0.5, 0.5);
		flag_name_502.text = "Australia";
		flag_name_502.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_502);

		// flag_name_533
		const flag_name_533 = this.add.text(318, 406, "", {});
		flag_name_533.setOrigin(0.5, 0.5);
		flag_name_533.text = "Argentina";
		flag_name_533.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_533);

		// flag_name_514
		const flag_name_514 = this.add.text(203, 406, "", {});
		flag_name_514.setOrigin(0.5, 0.5);
		flag_name_514.text = "Netherlands";
		flag_name_514.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_514);

		// flag_name_535
		const flag_name_535 = this.add.text(653, 532, "", {});
		flag_name_535.setOrigin(0.5, 0.5);
		flag_name_535.text = "Chile";
		flag_name_535.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_535);

		// flag_name_500
		const flag_name_500 = this.add.text(539, 532, "", {});
		flag_name_500.setOrigin(0.5, 0.5);
		flag_name_500.text = "Canada";
		flag_name_500.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_500);

		// flag_name_505
		const flag_name_505 = this.add.text(429, 532, "", {});
		flag_name_505.setOrigin(0.5, 0.5);
		flag_name_505.text = "Brazil";
		flag_name_505.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_505);

		// flag_name_529
		const flag_name_529 = this.add.text(314, 532, "", {});
		flag_name_529.setOrigin(0.5, 0.5);
		flag_name_529.text = "Belize";
		flag_name_529.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_529);

		// flag_name_538
		const flag_name_538 = this.add.text(204, 532, "", {});
		flag_name_538.setOrigin(0.5, 0.5);
		flag_name_538.text = "Peru";
		flag_name_538.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_538);

		// flag_name_507
		const flag_name_507 = this.add.text(651, 659, "", {});
		flag_name_507.setOrigin(0.5, 0.5);
		flag_name_507.text = "Denmark";
		flag_name_507.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_507);

		// flag_name_540
		const flag_name_540 = this.add.text(537, 659, "", {});
		flag_name_540.setOrigin(0.5, 0.5);
		flag_name_540.text = "Costa Rica";
		flag_name_540.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_540);

		// flag_name_536
		const flag_name_536 = this.add.text(431, 659, "", {});
		flag_name_536.setOrigin(0.5, 0.5);
		flag_name_536.text = "Columbia";
		flag_name_536.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_536);

		// flag_name_506
		const flag_name_506 = this.add.text(317, 659, "", {});
		flag_name_506.setOrigin(0.5, 0.5);
		flag_name_506.text = "China";
		flag_name_506.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_506);

		// flag_name_525
		const flag_name_525 = this.add.text(202, 659, "", {});
		flag_name_525.setOrigin(0.5, 0.5);
		flag_name_525.text = "Portugal";
		flag_name_525.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_525);

		// flag_name_508
		const flag_name_508 = this.add.text(651, 790, "", {});
		flag_name_508.setOrigin(0.5, 0.5);
		flag_name_508.text = "Finland";
		flag_name_508.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_508);

		// flag_name_530
		const flag_name_530 = this.add.text(537, 790, "", {});
		flag_name_530.setOrigin(0.5, 0.5);
		flag_name_530.text = "Egypt";
		flag_name_530.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_530);

		// flag_name_548
		const flag_name_548 = this.add.text(431, 790, "", {});
		flag_name_548.setOrigin(0.5, 0.5);
		flag_name_548.text = "Ecuador";
		flag_name_548.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_548);

		// flag_name_546
		const flag_name_546 = this.add.text(317, 802, "", {});
		flag_name_546.setOrigin(0.5, 0.5);
		flag_name_546.text = "Dominican\nRepublic";
		flag_name_546.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_546);

		// flag_name_542
		const flag_name_542 = this.add.text(205, 792, "", {});
		flag_name_542.setOrigin(0.5, 0.5);
		flag_name_542.text = "Singapore";
		flag_name_542.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_542);

		// flag_name_537
		const flag_name_537 = this.add.text(874, 790, "", {});
		flag_name_537.setOrigin(0.5, 0.5);
		flag_name_537.text = "Puerto Rico";
		flag_name_537.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_537);

		// flag_name_517
		const flag_name_517 = this.add.text(989, 790, "", {});
		flag_name_517.setOrigin(0.5, 0.5);
		flag_name_517.text = "Russia";
		flag_name_517.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_517);

		// flag_name_526
		const flag_name_526 = this.add.text(1100, 790, "", {});
		flag_name_526.setOrigin(0.5, 0.5);
		flag_name_526.text = "South Africa";
		flag_name_526.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_526);

		// flag_name_518
		const flag_name_518 = this.add.text(1208, 791, "", {});
		flag_name_518.setOrigin(0.5, 0.5);
		flag_name_518.text = "Spain";
		flag_name_518.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_518);

		// flag_name_539
		const flag_name_539 = this.add.text(1315, 790, "", {});
		flag_name_539.setOrigin(0.5, 0.5);
		flag_name_539.text = "Venezuela";
		flag_name_539.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_539);

		// flag_name_513
		const flag_name_513 = this.add.text(879, 659, "", {});
		flag_name_513.setOrigin(0.5, 0.5);
		flag_name_513.text = "South Korea";
		flag_name_513.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_513);

		// flag_name_7095
		const flag_name_7095 = this.add.text(993, 659, "", {});
		flag_name_7095.setOrigin(0.5, 0.5);
		flag_name_7095.text = "Liechtenstein";
		flag_name_7095.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_7095);

		// flag_name_543
		const flag_name_543 = this.add.text(1103, 659, "", {});
		flag_name_543.setOrigin(0.5, 0.5);
		flag_name_543.text = "Malaysia";
		flag_name_543.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_543);

		// flag_name_522
		const flag_name_522 = this.add.text(1207, 659, "", {});
		flag_name_522.setOrigin(0.5, 0.5);
		flag_name_522.text = "Mexico";
		flag_name_522.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_522);

		// flag_name_547
		const flag_name_547 = this.add.text(1316, 659, "", {});
		flag_name_547.setOrigin(0.5, 0.5);
		flag_name_547.text = "Uruguay";
		flag_name_547.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_547);

		// flag_name_511
		const flag_name_511 = this.add.text(884, 536, "", {});
		flag_name_511.setOrigin(0.5, 0.5);
		flag_name_511.text = "Israel";
		flag_name_511.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_511);

		// flag_name_528
		const flag_name_528 = this.add.text(991, 533, "", {});
		flag_name_528.setOrigin(0.5, 0.5);
		flag_name_528.text = "Italy";
		flag_name_528.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_528);

		// flag_name_534
		const flag_name_534 = this.add.text(1102, 533, "", {});
		flag_name_534.setOrigin(0.5, 0.5);
		flag_name_534.text = "Jamaica";
		flag_name_534.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_534);

		// flag_name_512
		const flag_name_512 = this.add.text(1207, 533, "", {});
		flag_name_512.setOrigin(0.5, 0.5);
		flag_name_512.text = "Japan";
		flag_name_512.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_512);

		// flag_name_520
		const flag_name_520 = this.add.text(1319, 533, "", {});
		flag_name_520.setOrigin(0.5, 0.5);
		flag_name_520.text = "Switzerland";
		flag_name_520.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_520);

		// flag_name_545
		const flag_name_545 = this.add.text(885, 407, "", {});
		flag_name_545.setOrigin(0.5, 0.5);
		flag_name_545.text = "Haiti";
		flag_name_545.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_545);

		// flag_name_531
		const flag_name_531 = this.add.text(990, 407, "", {});
		flag_name_531.setOrigin(0.5, 0.5);
		flag_name_531.text = "Hungary";
		flag_name_531.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_531);

		// flag_name_527
		const flag_name_527 = this.add.text(1102, 407, "", {});
		flag_name_527.setOrigin(0.5, 0.5);
		flag_name_527.text = "India";
		flag_name_527.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_527);

		// flag_name_524
		const flag_name_524 = this.add.text(1204, 407, "", {});
		flag_name_524.setOrigin(0.5, 0.5);
		flag_name_524.text = "Ireland";
		flag_name_524.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_524);

		// flag_name_501
		const flag_name_501 = this.add.text(1317, 407, "", {});
		flag_name_501.setOrigin(0.5, 0.5);
		flag_name_501.text = "United States";
		flag_name_501.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_501);

		// flag_name_519
		const flag_name_519 = this.add.text(1317, 285, "", {});
		flag_name_519.setOrigin(0.5, 0.5);
		flag_name_519.text = "Sweden";
		flag_name_519.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_519);

		// flag_name_541
		const flag_name_541 = this.add.text(1213, 285, "", {});
		flag_name_541.setOrigin(0.5, 0.5);
		flag_name_541.text = "Guatemala";
		flag_name_541.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_541);

		// flag_name_503
		const flag_name_503 = this.add.text(1098, 285, "", {});
		flag_name_503.setOrigin(0.5, 0.5);
		flag_name_503.text = "United Kingdom";
		flag_name_503.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_503);

		// flag_name_510
		const flag_name_510 = this.add.text(988, 285, "", {});
		flag_name_510.setOrigin(0.5, 0.5);
		flag_name_510.text = "Germany";
		flag_name_510.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_510);

		// flag_name_509
		const flag_name_509 = this.add.text(884, 285, "", {});
		flag_name_509.setOrigin(0.5, 0.5);
		flag_name_509.text = "France";
		flag_name_509.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_509);

		// flag_name_521
		const flag_name_521 = this.add.text(1315, 161, "", {});
		flag_name_521.setOrigin(0.5, 0.5);
		flag_name_521.text = "Turkey";
		flag_name_521.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_521);

		// flag_name_516
		const flag_name_516 = this.add.text(1207, 161, "", {});
		flag_name_516.setOrigin(0.5, 0.5);
		flag_name_516.text = "Poland";
		flag_name_516.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_516);

		// flag_name_544
		const flag_name_544 = this.add.text(1097, 161, "", {});
		flag_name_544.setOrigin(0.5, 0.5);
		flag_name_544.text = "Philippines";
		flag_name_544.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_544);

		// flag_name_515
		const flag_name_515 = this.add.text(992, 158, "", {});
		flag_name_515.setOrigin(0.5, 0.5);
		flag_name_515.text = "Norway";
		flag_name_515.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_515);

		// flag_name_523
		const flag_name_523 = this.add.text(883, 157, "", {});
		flag_name_523.setOrigin(0.5, 0.5);
		flag_name_523.text = "New Zealand";
		flag_name_523.setStyle({ "fontFamily": "Burbank Small", "fontSize": "18px" });
		page19.add(flag_name_523);

		// flag_button_7186
		const flag_button_7186 = this.add.ellipse(325, 113, 75, 75);
		flag_button_7186.fillColor = 50917;
		flag_button_7186.fillAlpha = 0.5;
		page19.add(flag_button_7186);

		// flag_button_7187
		const flag_button_7187 = this.add.ellipse(430, 113, 75, 75);
		flag_button_7187.fillColor = 50917;
		flag_button_7187.fillAlpha = 0.5;
		page19.add(flag_button_7187);

		// flag_button_7188
		const flag_button_7188 = this.add.ellipse(544, 114, 75, 75);
		flag_button_7188.fillColor = 50917;
		flag_button_7188.fillAlpha = 0.5;
		page19.add(flag_button_7188);

		// flag_button_7189
		const flag_button_7189 = this.add.ellipse(656, 113, 75, 75);
		flag_button_7189.fillColor = 50917;
		flag_button_7189.fillAlpha = 0.5;
		page19.add(flag_button_7189);

		// flag_button_7148
		const flag_button_7148 = this.add.ellipse(653, 235, 75, 75);
		flag_button_7148.fillColor = 50917;
		flag_button_7148.fillAlpha = 0.5;
		page19.add(flag_button_7148);

		// flag_button_7182
		const flag_button_7182 = this.add.ellipse(538, 235, 75, 75);
		flag_button_7182.fillColor = 50917;
		flag_button_7182.fillAlpha = 0.5;
		page19.add(flag_button_7182);

		// flag_button_7183
		const flag_button_7183 = this.add.ellipse(430, 235, 75, 75);
		flag_button_7183.fillColor = 50917;
		flag_button_7183.fillAlpha = 0.5;
		page19.add(flag_button_7183);

		// flag_button_7184
		const flag_button_7184 = this.add.ellipse(318, 235, 75, 75);
		flag_button_7184.fillColor = 50917;
		flag_button_7184.fillAlpha = 0.5;
		page19.add(flag_button_7184);

		// flag_button_7185
		const flag_button_7185 = this.add.ellipse(201, 234, 75, 75);
		flag_button_7185.fillColor = 50917;
		flag_button_7185.fillAlpha = 0.5;
		page19.add(flag_button_7185);

		// flag_button_514
		const flag_button_514 = this.add.ellipse(201, 356, 75, 75);
		flag_button_514.fillColor = 50917;
		flag_button_514.fillAlpha = 0.5;
		page19.add(flag_button_514);

		// flag_button_533
		const flag_button_533 = this.add.ellipse(314, 357, 75, 75);
		flag_button_533.fillColor = 50917;
		flag_button_533.fillAlpha = 0.5;
		page19.add(flag_button_533);

		// flag_button_502
		const flag_button_502 = this.add.ellipse(427, 355, 75, 75);
		flag_button_502.fillColor = 50917;
		flag_button_502.fillAlpha = 0.5;
		page19.add(flag_button_502);

		// flag_button_7096
		const flag_button_7096 = this.add.ellipse(538, 356, 75, 75);
		flag_button_7096.fillColor = 50917;
		flag_button_7096.fillAlpha = 0.5;
		page19.add(flag_button_7096);

		// flag_button_504
		const flag_button_504 = this.add.ellipse(653, 356, 75, 75);
		flag_button_504.fillColor = 50917;
		flag_button_504.fillAlpha = 0.5;
		page19.add(flag_button_504);

		// flag_button_500
		const flag_button_500 = this.add.ellipse(539, 480, 75, 75);
		flag_button_500.fillColor = 50917;
		flag_button_500.fillAlpha = 0.5;
		page19.add(flag_button_500);

		// flag_button_535
		const flag_button_535 = this.add.ellipse(652, 481, 75, 75);
		flag_button_535.fillColor = 50917;
		flag_button_535.fillAlpha = 0.5;
		page19.add(flag_button_535);

		// flag_button_505
		const flag_button_505 = this.add.ellipse(429, 480, 75, 75);
		flag_button_505.fillColor = 50917;
		flag_button_505.fillAlpha = 0.5;
		page19.add(flag_button_505);

		// flag_button_529
		const flag_button_529 = this.add.ellipse(315, 480, 75, 75);
		flag_button_529.fillColor = 50917;
		flag_button_529.fillAlpha = 0.5;
		page19.add(flag_button_529);

		// flag_button_538
		const flag_button_538 = this.add.ellipse(203, 480, 75, 75);
		flag_button_538.fillColor = 50917;
		flag_button_538.fillAlpha = 0.5;
		page19.add(flag_button_538);

		// flag_button_507
		const flag_button_507 = this.add.ellipse(653, 607, 75, 75);
		flag_button_507.fillColor = 50917;
		flag_button_507.fillAlpha = 0.5;
		page19.add(flag_button_507);

		// flag_button_536
		const flag_button_536 = this.add.ellipse(428, 607, 75, 75);
		flag_button_536.fillColor = 50917;
		flag_button_536.fillAlpha = 0.5;
		page19.add(flag_button_536);

		// flag_button_506
		const flag_button_506 = this.add.ellipse(316, 607, 75, 75);
		flag_button_506.fillColor = 50917;
		flag_button_506.fillAlpha = 0.5;
		page19.add(flag_button_506);

		// flag_button_525
		const flag_button_525 = this.add.ellipse(200, 607, 75, 75);
		flag_button_525.fillColor = 50917;
		flag_button_525.fillAlpha = 0.5;
		page19.add(flag_button_525);

		// flag_button_530
		const flag_button_530 = this.add.ellipse(539, 738, 75, 75);
		flag_button_530.fillColor = 50917;
		flag_button_530.fillAlpha = 0.5;
		page19.add(flag_button_530);

		// flag_button_508
		const flag_button_508 = this.add.ellipse(654, 738, 75, 75);
		flag_button_508.fillColor = 50917;
		flag_button_508.fillAlpha = 0.5;
		page19.add(flag_button_508);

		// flag_button_548
		const flag_button_548 = this.add.ellipse(429, 738, 75, 75);
		flag_button_548.fillColor = 50917;
		flag_button_548.fillAlpha = 0.5;
		page19.add(flag_button_548);

		// flag_button_546
		const flag_button_546 = this.add.ellipse(317, 738, 75, 75);
		flag_button_546.fillColor = 50917;
		flag_button_546.fillAlpha = 0.5;
		page19.add(flag_button_546);

		// flag_button_542
		const flag_button_542 = this.add.ellipse(201, 738, 75, 75);
		flag_button_542.fillColor = 50917;
		flag_button_542.fillAlpha = 0.5;
		page19.add(flag_button_542);

		// flag_button_537
		const flag_button_537 = this.add.ellipse(881, 734, 75, 75);
		flag_button_537.fillColor = 50917;
		flag_button_537.fillAlpha = 0.5;
		page19.add(flag_button_537);

		// flag_button_517
		const flag_button_517 = this.add.ellipse(990, 734, 75, 75);
		flag_button_517.fillColor = 50917;
		flag_button_517.fillAlpha = 0.5;
		page19.add(flag_button_517);

		// flag_button_526
		const flag_button_526 = this.add.ellipse(1100, 734, 75, 75);
		flag_button_526.fillColor = 50917;
		flag_button_526.fillAlpha = 0.5;
		page19.add(flag_button_526);

		// flag_button_539
		const flag_button_539 = this.add.ellipse(1312, 734, 75, 75);
		flag_button_539.fillColor = 50917;
		flag_button_539.fillAlpha = 0.5;
		page19.add(flag_button_539);

		// flag_button_518
		const flag_button_518 = this.add.ellipse(1204, 734, 75, 75);
		flag_button_518.fillColor = 50917;
		flag_button_518.fillAlpha = 0.5;
		page19.add(flag_button_518);

		// flag_button_513
		const flag_button_513 = this.add.ellipse(883, 604, 75, 75);
		flag_button_513.fillColor = 50917;
		flag_button_513.fillAlpha = 0.5;
		page19.add(flag_button_513);

		// flag_button_7095
		const flag_button_7095 = this.add.ellipse(986, 606, 75, 75);
		flag_button_7095.fillColor = 50917;
		flag_button_7095.fillAlpha = 0.5;
		page19.add(flag_button_7095);

		// flag_button_543
		const flag_button_543 = this.add.ellipse(1099, 606, 75, 75);
		flag_button_543.fillColor = 50917;
		flag_button_543.fillAlpha = 0.5;
		page19.add(flag_button_543);

		// flag_button_547
		const flag_button_547 = this.add.ellipse(1315, 606, 75, 75);
		flag_button_547.fillColor = 50917;
		flag_button_547.fillAlpha = 0.5;
		page19.add(flag_button_547);

		// flag_button_522
		const flag_button_522 = this.add.ellipse(1204, 606, 75, 75);
		flag_button_522.fillColor = 50917;
		flag_button_522.fillAlpha = 0.5;
		page19.add(flag_button_522);

		// flag_button_511
		const flag_button_511 = this.add.ellipse(885, 476, 75, 75);
		flag_button_511.fillColor = 50917;
		flag_button_511.fillAlpha = 0.5;
		page19.add(flag_button_511);

		// flag_button_528
		const flag_button_528 = this.add.ellipse(990, 476, 75, 75);
		flag_button_528.fillColor = 50917;
		flag_button_528.fillAlpha = 0.5;
		page19.add(flag_button_528);

		// flag_button_534
		const flag_button_534 = this.add.ellipse(1100, 476, 75, 75);
		flag_button_534.fillColor = 50917;
		flag_button_534.fillAlpha = 0.5;
		page19.add(flag_button_534);

		// flag_button_520
		const flag_button_520 = this.add.ellipse(1314, 476, 75, 75);
		flag_button_520.fillColor = 50917;
		flag_button_520.fillAlpha = 0.5;
		page19.add(flag_button_520);

		// flag_button_512
		const flag_button_512 = this.add.ellipse(1204, 477, 75, 75);
		flag_button_512.fillColor = 50917;
		flag_button_512.fillAlpha = 0.5;
		page19.add(flag_button_512);

		// flag_button_501
		const flag_button_501 = this.add.ellipse(1313, 350, 75, 75);
		flag_button_501.fillColor = 50917;
		flag_button_501.fillAlpha = 0.5;
		page19.add(flag_button_501);

		// flag_button_524
		const flag_button_524 = this.add.ellipse(1205, 350, 75, 75);
		flag_button_524.fillColor = 50917;
		flag_button_524.fillAlpha = 0.5;
		page19.add(flag_button_524);

		// flag_button_527
		const flag_button_527 = this.add.ellipse(1099, 350, 75, 75);
		flag_button_527.fillColor = 50917;
		flag_button_527.fillAlpha = 0.5;
		page19.add(flag_button_527);

		// flag_button_531
		const flag_button_531 = this.add.ellipse(991, 350, 75, 75);
		flag_button_531.fillColor = 50917;
		flag_button_531.fillAlpha = 0.5;
		page19.add(flag_button_531);

		// flag_button_545
		const flag_button_545 = this.add.ellipse(883, 351, 75, 75);
		flag_button_545.fillColor = 50917;
		flag_button_545.fillAlpha = 0.5;
		page19.add(flag_button_545);

		// flag_button_509
		const flag_button_509 = this.add.ellipse(883, 227, 75, 75);
		flag_button_509.fillColor = 50917;
		flag_button_509.fillAlpha = 0.5;
		page19.add(flag_button_509);

		// flag_button_510
		const flag_button_510 = this.add.ellipse(990, 228, 75, 75);
		flag_button_510.fillColor = 50917;
		flag_button_510.fillAlpha = 0.5;
		page19.add(flag_button_510);

		// flag_button_503
		const flag_button_503 = this.add.ellipse(1098, 228, 75, 75);
		flag_button_503.fillColor = 50917;
		flag_button_503.fillAlpha = 0.5;
		page19.add(flag_button_503);

		// flag_button_541
		const flag_button_541 = this.add.ellipse(1202, 228, 75, 75);
		flag_button_541.fillColor = 50917;
		flag_button_541.fillAlpha = 0.5;
		page19.add(flag_button_541);

		// flag_button_519
		const flag_button_519 = this.add.ellipse(1315, 227, 75, 75);
		flag_button_519.fillColor = 50917;
		flag_button_519.fillAlpha = 0.5;
		page19.add(flag_button_519);

		// flag_button_521
		const flag_button_521 = this.add.ellipse(1314, 105, 75, 75);
		flag_button_521.fillColor = 50917;
		flag_button_521.fillAlpha = 0.5;
		page19.add(flag_button_521);

		// flag_button_516
		const flag_button_516 = this.add.ellipse(1205, 106, 75, 75);
		flag_button_516.fillColor = 50917;
		flag_button_516.fillAlpha = 0.5;
		page19.add(flag_button_516);

		// flag_button_544
		const flag_button_544 = this.add.ellipse(1095, 105, 75, 75);
		flag_button_544.fillColor = 50917;
		flag_button_544.fillAlpha = 0.5;
		page19.add(flag_button_544);

		// flag_button_515
		const flag_button_515 = this.add.ellipse(990, 107, 75, 75);
		flag_button_515.fillColor = 50917;
		flag_button_515.fillAlpha = 0.5;
		page19.add(flag_button_515);

		// flag_button_523
		const flag_button_523 = this.add.ellipse(883, 105, 75, 75);
		flag_button_523.fillColor = 50917;
		flag_button_523.fillAlpha = 0.5;
		page19.add(flag_button_523);

		// flag_button_540
		const flag_button_540 = this.add.ellipse(539, 607, 75, 75);
		flag_button_540.fillColor = 50917;
		flag_button_540.fillAlpha = 0.5;
		page19.add(flag_button_540);

		// page18
		const page18 = this.add.container(0, 0);
		page18.visible = false;
		container.add(page18);

		// page19_bg
		const page19_bg = this.add.image(760, 480, "jan22clothing", "page0019");
		page18.add(page19_bg);

		// page19_header
		const page19_header = this.add.text(204, 82, "", {});
		page19_header.setOrigin(0.5, 0.5);
		page19_header.text = "Clothing items\nfor everyone";
		page19_header.setStyle({ "fontFamily": "Burbank Small", "fontSize": "27px", "fontStyle": "bold italic" });
		page18.add(page19_header);

		// buyBtn_1259
		const buyBtn_1259 = this.add.sprite(272, 346, "jan22clothing", "buyBtn");
		page18.add(buyBtn_1259);

		// priceNum_1259
		const priceNum_1259 = this.add.text(286, 347, "", {});
		priceNum_1259.setOrigin(0.5, 0.5);
		priceNum_1259.text = "250";
		priceNum_1259.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page18.add(priceNum_1259);

		// nameTag_1259
		const nameTag_1259 = this.add.text(281, 309, "", {});
		nameTag_1259.setOrigin(0.5, 0.5);
		nameTag_1259.text = "The Sunny Side";
		nameTag_1259.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page18.add(nameTag_1259);

		// buyBtn_322
		const buyBtn_322 = this.add.sprite(560, 344, "jan22clothing", "buyBtn");
		page18.add(buyBtn_322);

		// priceNum_322
		const priceNum_322 = this.add.text(574, 345, "", {});
		priceNum_322.setOrigin(0.5, 0.5);
		priceNum_322.text = "200";
		priceNum_322.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page18.add(priceNum_322);

		// nameTag_322
		const nameTag_322 = this.add.text(569, 309, "", {});
		nameTag_322.setOrigin(0.5, 0.5);
		nameTag_322.text = "Gold Wristwatch";
		nameTag_322.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page18.add(nameTag_322);

		// buyBtn_6101
		const buyBtn_6101 = this.add.sprite(562, 689, "jan22clothing", "buyBtn");
		page18.add(buyBtn_6101);

		// priceNum_6101
		const priceNum_6101 = this.add.text(575, 690, "", {});
		priceNum_6101.setOrigin(0.5, 0.5);
		priceNum_6101.text = "200";
		priceNum_6101.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page18.add(priceNum_6101);

		// nameTag_6101
		const nameTag_6101 = this.add.text(571, 654, "", {});
		nameTag_6101.setOrigin(0.5, 0.5);
		nameTag_6101.text = "Untied Violet Sneakers";
		nameTag_6101.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page18.add(nameTag_6101);

		// buyBtn_4369
		const buyBtn_4369 = this.add.sprite(274, 691, "jan22clothing", "buyBtn");
		page18.add(buyBtn_4369);

		// priceNum_4369
		const priceNum_4369 = this.add.text(288, 692, "", {});
		priceNum_4369.setOrigin(0.5, 0.5);
		priceNum_4369.text = "250";
		priceNum_4369.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page18.add(priceNum_4369);

		// nameTag_4369
		const nameTag_4369 = this.add.text(283, 654, "", {});
		nameTag_4369.setOrigin(0.5, 0.5);
		nameTag_4369.text = "Striped Skater Thread";
		nameTag_4369.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page18.add(nameTag_4369);

		// secret_boombox
		const secret_boombox = this.add.rectangle(1134, 476, 150, 150);
		secret_boombox.angle = 15;
		secret_boombox.fillColor = 2551787;
		secret_boombox.fillAlpha = 0.5;
		page18.add(secret_boombox);

		// page17
		const page17 = this.add.container(0, 0);
		page17.visible = false;
		container.add(page17);

		// page18_bg
		const page18_bg = this.add.image(760, 480, "jan22clothing", "page0018");
		page17.add(page18_bg);

		// nameTag_3198
		const nameTag_3198 = this.add.text(276, 728, "", {});
		nameTag_3198.setOrigin(0.5, 0.5);
		nameTag_3198.text = "Tourist Camera";
		nameTag_3198.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page17.add(nameTag_3198);

		// buyBtn_3198
		const buyBtn_3198 = this.add.sprite(267, 765, "jan22clothing", "buyBtn");
		page17.add(buyBtn_3198);

		// priceNum_3198
		const priceNum_3198 = this.add.text(281, 766, "", {});
		priceNum_3198.setOrigin(0.5, 0.5);
		priceNum_3198.text = "250";
		priceNum_3198.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page17.add(priceNum_3198);

		// nameTag_5424
		const nameTag_5424 = this.add.text(582, 728, "", {});
		nameTag_5424.setOrigin(0.5, 0.5);
		nameTag_5424.text = "Stuffed Suitcase";
		nameTag_5424.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page17.add(nameTag_5424);

		// buyBtn_5424
		const buyBtn_5424 = this.add.sprite(573, 763, "jan22clothing", "buyBtn");
		page17.add(buyBtn_5424);

		// priceNum_5424
		const priceNum_5424 = this.add.text(587, 764, "", {});
		priceNum_5424.setOrigin(0.5, 0.5);
		priceNum_5424.text = "200";
		priceNum_5424.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page17.add(priceNum_5424);

		// nameTag_24044
		const nameTag_24044 = this.add.text(271, 509, "", {});
		nameTag_24044.setOrigin(0.5, 0.5);
		nameTag_24044.text = "Floral Shirt";
		nameTag_24044.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "20px" });
		page17.add(nameTag_24044);

		// buyBtn_24044
		const buyBtn_24044 = this.add.sprite(262, 546, "jan22clothing", "buyBtn");
		page17.add(buyBtn_24044);

		// priceNum_24044
		const priceNum_24044 = this.add.text(276, 547, "", {});
		priceNum_24044.setOrigin(0.5, 0.5);
		priceNum_24044.text = "300";
		priceNum_24044.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page17.add(priceNum_24044);

		// nameTag_24043
		const nameTag_24043 = this.add.text(588, 509, "", {});
		nameTag_24043.setOrigin(0.5, 0.5);
		nameTag_24043.text = "CP Air Uniform";
		nameTag_24043.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "20px" });
		page17.add(nameTag_24043);

		// buyBtn_24043
		const buyBtn_24043 = this.add.sprite(579, 546, "jan22clothing", "buyBtn");
		page17.add(buyBtn_24043);

		// priceNum_24043
		const priceNum_24043 = this.add.text(593, 547, "", {});
		priceNum_24043.setOrigin(0.5, 0.5);
		priceNum_24043.text = "300";
		priceNum_24043.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page17.add(priceNum_24043);

		// nameTag_1785
		const nameTag_1785 = this.add.text(583, 247, "", {});
		nameTag_1785.setOrigin(0.5, 0.5);
		nameTag_1785.text = "The High Flyer";
		nameTag_1785.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page17.add(nameTag_1785);

		// buyBtn_1785
		const buyBtn_1785 = this.add.sprite(574, 284, "jan22clothing", "buyBtn");
		page17.add(buyBtn_1785);

		// priceNum_1785
		const priceNum_1785 = this.add.text(588, 285, "", {});
		priceNum_1785.setOrigin(0.5, 0.5);
		priceNum_1785.text = "250";
		priceNum_1785.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page17.add(priceNum_1785);

		// nameTag_1786
		const nameTag_1786 = this.add.text(265, 250, "", {});
		nameTag_1786.setOrigin(0.5, 0.5);
		nameTag_1786.text = "Straw Sun Hat";
		nameTag_1786.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page17.add(nameTag_1786);

		// buyBtn_1786
		const buyBtn_1786 = this.add.sprite(256, 287, "jan22clothing", "buyBtn");
		page17.add(buyBtn_1786);

		// priceNum_1786
		const priceNum_1786 = this.add.text(270, 288, "", {});
		priceNum_1786.setOrigin(0.5, 0.5);
		priceNum_1786.text = "250";
		priceNum_1786.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page17.add(priceNum_1786);

		// secret_hawaiian_lei
		const secret_hawaiian_lei = this.add.rectangle(1274, 541, 100, 50);
		secret_hawaiian_lei.angle = 15;
		secret_hawaiian_lei.fillColor = 2551787;
		secret_hawaiian_lei.fillAlpha = 0.5;
		page17.add(secret_hawaiian_lei);

		// page16
		const page16 = this.add.container(0, 0);
		page16.visible = false;
		container.add(page16);

		// page17_bg
		const page17_bg = this.add.image(760, 480, "jan22clothing", "page0017");
		page16.add(page17_bg);

		// page17_header
		const page17_header = this.add.text(204, 82, "", {});
		page17_header.setOrigin(0.5, 0.5);
		page17_header.text = "Clothing items\nfor everyone";
		page17_header.setStyle({ "fontFamily": "Burbank Small", "fontSize": "27px", "fontStyle": "bold italic" });
		page16.add(page17_header);

		// nameTag_384
		const nameTag_384 = this.add.text(947, 739, "", {});
		nameTag_384.setOrigin(0.5, 0.5);
		nameTag_384.text = "Green Sandals";
		nameTag_384.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page16.add(nameTag_384);

		// buyBtn_384
		const buyBtn_384 = this.add.sprite(938, 776, "jan22clothing", "buyBtn");
		page16.add(buyBtn_384);

		// priceNum_384
		const priceNum_384 = this.add.text(952, 777, "", {});
		priceNum_384.setOrigin(0.5, 0.5);
		priceNum_384.text = "250";
		priceNum_384.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page16.add(priceNum_384);

		// nameTag_6140
		const nameTag_6140 = this.add.text(1253, 739, "", {});
		nameTag_6140.setOrigin(0.5, 0.5);
		nameTag_6140.text = "Shiny Slippers";
		nameTag_6140.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page16.add(nameTag_6140);

		// buyBtn_6140
		const buyBtn_6140 = this.add.sprite(1244, 776, "jan22clothing", "buyBtn");
		page16.add(buyBtn_6140);

		// priceNum_6140
		const priceNum_6140 = this.add.text(1258, 777, "", {});
		priceNum_6140.setOrigin(0.5, 0.5);
		priceNum_6140.text = "200";
		priceNum_6140.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page16.add(priceNum_6140);

		// nameTag_4235
		const nameTag_4235 = this.add.text(942, 507, "", {});
		nameTag_4235.setOrigin(0.5, 0.5);
		nameTag_4235.text = "Summer Threads";
		nameTag_4235.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "20px" });
		page16.add(nameTag_4235);

		// buyBtn_4235
		const buyBtn_4235 = this.add.sprite(933, 544, "jan22clothing", "buyBtn");
		page16.add(buyBtn_4235);

		// priceNum_4235
		const priceNum_4235 = this.add.text(947, 545, "", {});
		priceNum_4235.setOrigin(0.5, 0.5);
		priceNum_4235.text = "300";
		priceNum_4235.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page16.add(priceNum_4235);

		// nameTag_4316
		const nameTag_4316 = this.add.text(1259, 504, "", {});
		nameTag_4316.setOrigin(0.5, 0.5);
		nameTag_4316.text = "Black Vest Outfit";
		nameTag_4316.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "20px" });
		page16.add(nameTag_4316);

		// buyBtn_4316
		const buyBtn_4316 = this.add.sprite(1250, 541, "jan22clothing", "buyBtn");
		page16.add(buyBtn_4316);

		// priceNum_4316
		const priceNum_4316 = this.add.text(1264, 542, "", {});
		priceNum_4316.setOrigin(0.5, 0.5);
		priceNum_4316.text = "300";
		priceNum_4316.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page16.add(priceNum_4316);

		// nameTag_1195
		const nameTag_1195 = this.add.text(1254, 240, "", {});
		nameTag_1195.setOrigin(0.5, 0.5);
		nameTag_1195.text = "The Chic";
		nameTag_1195.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page16.add(nameTag_1195);

		// buyBtn_1195
		const buyBtn_1195 = this.add.sprite(1245, 277, "jan22clothing", "buyBtn");
		page16.add(buyBtn_1195);

		// priceNum_1195
		const priceNum_1195 = this.add.text(1259, 278, "", {});
		priceNum_1195.setOrigin(0.5, 0.5);
		priceNum_1195.text = "250";
		priceNum_1195.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page16.add(priceNum_1195);

		// nameTag_1525
		const nameTag_1525 = this.add.text(936, 227, "", {});
		nameTag_1525.setOrigin(0.5, 0.5);
		nameTag_1525.text = "The Cruising";
		nameTag_1525.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page16.add(nameTag_1525);

		// buyBtn_1525
		const buyBtn_1525 = this.add.sprite(927, 264, "jan22clothing", "buyBtn");
		page16.add(buyBtn_1525);

		// priceNum_1525
		const priceNum_1525 = this.add.text(941, 265, "", {});
		priceNum_1525.setOrigin(0.5, 0.5);
		priceNum_1525.text = "250";
		priceNum_1525.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page16.add(priceNum_1525);

		// secret_3d_glasses
		const secret_3d_glasses = this.add.rectangle(541, 324, 150, 150);
		secret_3d_glasses.fillColor = 2551787;
		secret_3d_glasses.fillAlpha = 0.5;
		page16.add(secret_3d_glasses);

		// page15
		const page15 = this.add.container(0, 0);
		page15.visible = false;
		container.add(page15);

		// page16_bg
		const page16_bg = this.add.image(760, 480, "jan22clothing", "page0016");
		page15.add(page16_bg);

		// page16_header
		const page16_header = this.add.text(204, 82, "", {});
		page16_header.setOrigin(0.5, 0.5);
		page16_header.text = "Clothing items\nfor everyone";
		page16_header.setStyle({ "fontFamily": "Burbank Small", "fontSize": "27px", "fontStyle": "bold italic" });
		page15.add(page16_header);

		// buyBtn_1835
		const buyBtn_1835 = this.add.sprite(248, 390, "jan22clothing", "buyBtn");
		page15.add(buyBtn_1835);

		// priceNum_1835
		const priceNum_1835 = this.add.text(262, 391, "", {});
		priceNum_1835.setOrigin(0.5, 0.5);
		priceNum_1835.text = "300";
		priceNum_1835.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page15.add(priceNum_1835);

		// nameTag_1835
		const nameTag_1835 = this.add.text(257, 349, "", {});
		nameTag_1835.setOrigin(0.5, 0.5);
		nameTag_1835.text = "The Indie-go";
		nameTag_1835.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page15.add(nameTag_1835);

		// buyBtn_5133
		const buyBtn_5133 = this.add.sprite(590, 390, "jan22clothing", "buyBtn");
		page15.add(buyBtn_5133);

		// priceNum_5133
		const priceNum_5133 = this.add.text(604, 391, "", {});
		priceNum_5133.setOrigin(0.5, 0.5);
		priceNum_5133.text = "300";
		priceNum_5133.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page15.add(priceNum_5133);

		// nameTag_5133
		const nameTag_5133 = this.add.text(599, 349, "", {});
		nameTag_5133.setOrigin(0.5, 0.5);
		nameTag_5133.text = "Blue Water Bottle";
		nameTag_5133.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page15.add(nameTag_5133);

		// buyBtn_4638
		const buyBtn_4638 = this.add.sprite(247, 698, "jan22clothing", "buyBtn");
		page15.add(buyBtn_4638);

		// priceNum_4638
		const priceNum_4638 = this.add.text(261, 699, "", {});
		priceNum_4638.setOrigin(0.5, 0.5);
		priceNum_4638.text = "300";
		priceNum_4638.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page15.add(priceNum_4638);

		// nameTag_4638
		const nameTag_4638 = this.add.text(256, 658, "", {});
		nameTag_4638.setOrigin(0.5, 0.5);
		nameTag_4638.text = "Green Dance Sweats";
		nameTag_4638.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page15.add(nameTag_4638);

		// buyBtn_6074
		const buyBtn_6074 = this.add.sprite(589, 698, "jan22clothing", "buyBtn");
		page15.add(buyBtn_6074);

		// priceNum_6074
		const priceNum_6074 = this.add.text(603, 699, "", {});
		priceNum_6074.setOrigin(0.5, 0.5);
		priceNum_6074.text = "300";
		priceNum_6074.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page15.add(priceNum_6074);

		// nameTag_6074
		const nameTag_6074 = this.add.text(598, 658, "", {});
		nameTag_6074.setOrigin(0.5, 0.5);
		nameTag_6074.text = "Orange High Tops";
		nameTag_6074.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page15.add(nameTag_6074);

		// page14
		const page14 = this.add.container(0, 0);
		page14.visible = false;
		container.add(page14);

		// page15_bg
		const page15_bg = this.add.image(760, 480, "jan22clothing", "page0015");
		page14.add(page15_bg);

		// page15_header
		const page15_header = this.add.text(204, 82, "", {});
		page15_header.setOrigin(0.5, 0.5);
		page15_header.text = "Create your\nown hoodie!";
		page15_header.setStyle({ "fontFamily": "Burbank Small", "fontSize": "27px", "fontStyle": "bold italic" });
		page14.add(page15_header);

		// customHoodie
		const customHoodie = this.add.sprite(1046, 337, "jan22clothing", "customHoodie0001");
		page14.add(customHoodie);

		// hoodie_black
		const hoodie_black = this.add.sprite(257, 310, "jan22clothing", "customHoodieSelection");
		hoodie_black.alpha = 0.01;
		hoodie_black.alphaTopLeft = 0.01;
		hoodie_black.alphaTopRight = 0.01;
		hoodie_black.alphaBottomLeft = 0.01;
		hoodie_black.alphaBottomRight = 0.01;
		page14.add(hoodie_black);

		// hoodie_white
		const hoodie_white = this.add.sprite(345, 314, "jan22clothing", "customHoodieSelection");
		hoodie_white.alpha = 0.01;
		hoodie_white.alphaTopLeft = 0.01;
		hoodie_white.alphaTopRight = 0.01;
		hoodie_white.alphaBottomLeft = 0.01;
		hoodie_white.alphaBottomRight = 0.01;
		page14.add(hoodie_white);

		// hoodie_yellow
		const hoodie_yellow = this.add.sprite(434, 317, "jan22clothing", "customHoodieSelection");
		hoodie_yellow.alpha = 0.01;
		hoodie_yellow.alphaTopLeft = 0.01;
		hoodie_yellow.alphaTopRight = 0.01;
		hoodie_yellow.alphaBottomLeft = 0.01;
		hoodie_yellow.alphaBottomRight = 0.01;
		page14.add(hoodie_yellow);

		// hoodie_orange
		const hoodie_orange = this.add.sprite(523, 320, "jan22clothing", "customHoodieSelection");
		hoodie_orange.alpha = 0.01;
		hoodie_orange.alphaTopLeft = 0.01;
		hoodie_orange.alphaTopRight = 0.01;
		hoodie_orange.alphaBottomLeft = 0.01;
		hoodie_orange.alphaBottomRight = 0.01;
		page14.add(hoodie_orange);

		// hoodie_red
		const hoodie_red = this.add.sprite(615, 324, "jan22clothing", "customHoodieSelection");
		hoodie_red.alpha = 0.01;
		hoodie_red.alphaTopLeft = 0.01;
		hoodie_red.alphaTopRight = 0.01;
		hoodie_red.alphaBottomLeft = 0.01;
		hoodie_red.alphaBottomRight = 0.01;
		page14.add(hoodie_red);

		// hoodie_puffle
		const hoodie_puffle = this.add.sprite(605, 545, "jan22clothing", "customHoodieSelection");
		hoodie_puffle.alpha = 0.01;
		hoodie_puffle.alphaTopLeft = 0.01;
		hoodie_puffle.alphaTopRight = 0.01;
		hoodie_puffle.alphaBottomLeft = 0.01;
		hoodie_puffle.alphaBottomRight = 0.01;
		page14.add(hoodie_puffle);

		// hoodie_stripes
		const hoodie_stripes = this.add.sprite(516, 541, "jan22clothing", "customHoodieSelection");
		hoodie_stripes.alpha = 0.01;
		hoodie_stripes.alphaTopLeft = 0.01;
		hoodie_stripes.alphaTopRight = 0.01;
		hoodie_stripes.alphaBottomLeft = 0.01;
		hoodie_stripes.alphaBottomRight = 0.01;
		page14.add(hoodie_stripes);

		// hoodie_stars
		const hoodie_stars = this.add.sprite(427, 538, "jan22clothing", "customHoodieSelection");
		hoodie_stars.alpha = 0.01;
		hoodie_stars.alphaTopLeft = 0.01;
		hoodie_stars.alphaTopRight = 0.01;
		hoodie_stars.alphaBottomLeft = 0.01;
		hoodie_stars.alphaBottomRight = 0.01;
		page14.add(hoodie_stars);

		// hoodie_splatters
		const hoodie_splatters = this.add.sprite(339, 535, "jan22clothing", "customHoodieSelection");
		hoodie_splatters.alpha = 0.01;
		hoodie_splatters.alphaTopLeft = 0.01;
		hoodie_splatters.alphaTopRight = 0.01;
		hoodie_splatters.alphaBottomLeft = 0.01;
		hoodie_splatters.alphaBottomRight = 0.01;
		page14.add(hoodie_splatters);

		// hoodie_fade
		const hoodie_fade = this.add.sprite(250, 531, "jan22clothing", "customHoodieSelection");
		hoodie_fade.alpha = 0.01;
		hoodie_fade.alphaTopLeft = 0.01;
		hoodie_fade.alphaTopRight = 0.01;
		hoodie_fade.alphaBottomLeft = 0.01;
		hoodie_fade.alphaBottomRight = 0.01;
		page14.add(hoodie_fade);

		// page15_step_1
		const page15_step_1 = this.add.text(220.57279455661774, 241.8295102827251, "", {});
		page15_step_1.angle = 2;
		page15_step_1.setOrigin(0, 0.5);
		page15_step_1.text = "1. Pick your color";
		page15_step_1.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page14.add(page15_step_1);

		// page15_step_2
		const page15_step_2 = this.add.text(206.5947242975235, 464.5731284432113, "", {});
		page15_step_2.angle = 2;
		page15_step_2.setOrigin(0, 0.5);
		page15_step_2.text = "2. Choose your design";
		page15_step_2.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page14.add(page15_step_2);

		// page15_step_3
		const page15_step_3 = this.add.text(1191.9579845666885, 137.37470987439156, "", {});
		page15_step_3.angle = -10;
		page15_step_3.setOrigin(0.5, 0.5);
		page15_step_3.text = "3. Click on your hoodie to buy!";
		page15_step_3.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
		page15_step_3.setWordWrapWidth(210);
		page14.add(page15_step_3);

		// secret_yellow_foam_finger
		const secret_yellow_foam_finger = this.add.rectangle(1210, 732, 150, 150);
		secret_yellow_foam_finger.angle = -10;
		secret_yellow_foam_finger.fillColor = 2551787;
		secret_yellow_foam_finger.fillAlpha = 0.5;
		page14.add(secret_yellow_foam_finger);

		// page13
		const page13 = this.add.container(0, 0);
		page13.visible = false;
		container.add(page13);

		// page13_bg
		const page13_bg = this.add.image(760, 480, "jan22clothing", "page0013");
		page13.add(page13_bg);

		// page4_header_1
		const page4_header_1 = this.add.text(420, 244, "", {});
		page4_header_1.setOrigin(0.5, 0.5);
		page4_header_1.text = "Items for Everyone!";
		page4_header_1.setStyle({ "color": "#2a1b00ff", "fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold italic" });
		page13.add(page4_header_1);

		// buyBtn_1853
		const buyBtn_1853 = this.add.sprite(417, 483, "jan22clothing", "buyBtn");
		page13.add(buyBtn_1853);

		// priceNum_1853
		const priceNum_1853 = this.add.text(431, 484, "", {});
		priceNum_1853.setOrigin(0.5, 0.5);
		priceNum_1853.text = "300";
		priceNum_1853.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page13.add(priceNum_1853);

		// nameTag_1853
		const nameTag_1853 = this.add.text(426, 446, "", {});
		nameTag_1853.setOrigin(0.5, 0.5);
		nameTag_1853.text = "Bear Ears";
		nameTag_1853.setStyle({ "color": "#281b00ff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
		page13.add(nameTag_1853);

		// buyBtn_4344
		const buyBtn_4344 = this.add.sprite(957, 380, "jan22clothing", "buyBtn");
		page13.add(buyBtn_4344);

		// priceNum_4344
		const priceNum_4344 = this.add.text(971, 381, "", {});
		priceNum_4344.setOrigin(0.5, 0.5);
		priceNum_4344.text = "300";
		priceNum_4344.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page13.add(priceNum_4344);

		// nameTag_4344
		const nameTag_4344 = this.add.text(966, 343, "", {});
		nameTag_4344.setOrigin(0.5, 0.5);
		nameTag_4344.text = "African Painted Dog Costume";
		nameTag_4344.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page13.add(nameTag_4344);

		// buyBtn_4560
		const buyBtn_4560 = this.add.sprite(953, 722, "jan22clothing", "buyBtn");
		page13.add(buyBtn_4560);

		// priceNum_4560
		const priceNum_4560 = this.add.text(967, 723, "", {});
		priceNum_4560.setOrigin(0.5, 0.5);
		priceNum_4560.text = "300";
		priceNum_4560.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page13.add(priceNum_4560);

		// nameTag_4560
		const nameTag_4560 = this.add.text(962, 678, "", {});
		nameTag_4560.setOrigin(0.5, 0.5);
		nameTag_4560.text = "Rock-hopper Costume";
		nameTag_4560.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page13.add(nameTag_4560);

		// buyBtn_4561
		const buyBtn_4561 = this.add.sprite(1244, 736, "jan22clothing", "buyBtn");
		page13.add(buyBtn_4561);

		// priceNum_4561
		const priceNum_4561 = this.add.text(1258, 737, "", {});
		priceNum_4561.setOrigin(0.5, 0.5);
		priceNum_4561.text = "300";
		priceNum_4561.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page13.add(priceNum_4561);

		// nameTag_4561
		const nameTag_4561 = this.add.text(1253, 699, "", {});
		nameTag_4561.setOrigin(0.5, 0.5);
		nameTag_4561.text = "Lion Costume";
		nameTag_4561.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page13.add(nameTag_4561);

		// buyBtn_4345
		const buyBtn_4345 = this.add.sprite(1237, 379, "jan22clothing", "buyBtn");
		page13.add(buyBtn_4345);

		// priceNum_4345
		const priceNum_4345 = this.add.text(1251, 380, "", {});
		priceNum_4345.setOrigin(0.5, 0.5);
		priceNum_4345.text = "300";
		priceNum_4345.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page13.add(priceNum_4345);

		// nameTag_4345
		const nameTag_4345 = this.add.text(1246, 342, "", {});
		nameTag_4345.setOrigin(0.5, 0.5);
		nameTag_4345.text = "Snow Leopard Costume";
		nameTag_4345.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page13.add(nameTag_4345);

		// page12
		const page12 = this.add.container(0, 0);
		page12.visible = false;
		container.add(page12);

		// page12_bg
		const page12_bg = this.add.image(760, 480, "jan22clothing", "page0012");
		page12.add(page12_bg);

		// buyBtn_6104
		const buyBtn_6104 = this.add.sprite(247, 363, "jan22clothing", "buyBtn");
		page12.add(buyBtn_6104);

		// priceNum_6104
		const priceNum_6104 = this.add.text(261, 362, "", {});
		priceNum_6104.setOrigin(0.5, 0.5);
		priceNum_6104.text = "250";
		priceNum_6104.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page12.add(priceNum_6104);

		// nameTag_6104
		const nameTag_6104 = this.add.text(255, 324, "", {});
		nameTag_6104.setOrigin(0.5, 0.5);
		nameTag_6104.text = "Blue Checkered Shoes";
		nameTag_6104.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page12.add(nameTag_6104);

		// buyBtn_6220
		const buyBtn_6220 = this.add.sprite(532, 323, "jan22clothing", "buyBtn");
		page12.add(buyBtn_6220);

		// priceNum_6220
		const priceNum_6220 = this.add.text(546, 324, "", {});
		priceNum_6220.setOrigin(0.5, 0.5);
		priceNum_6220.text = "250";
		priceNum_6220.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page12.add(priceNum_6220);

		// nameTag_6220
		const nameTag_6220 = this.add.text(540, 286, "", {});
		nameTag_6220.setOrigin(0.5, 0.5);
		nameTag_6220.text = "Rainbow Checkered Shoes";
		nameTag_6220.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page12.add(nameTag_6220);

		// buyBtn_6108
		const buyBtn_6108 = this.add.sprite(245, 535, "jan22clothing", "buyBtn");
		page12.add(buyBtn_6108);

		// priceNum_6108
		const priceNum_6108 = this.add.text(259, 535, "", {});
		priceNum_6108.setOrigin(0.5, 0.5);
		priceNum_6108.text = "250";
		priceNum_6108.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page12.add(priceNum_6108);

		// nameTag_6108
		const nameTag_6108 = this.add.text(253, 497, "", {});
		nameTag_6108.setOrigin(0.5, 0.5);
		nameTag_6108.text = "Brown Checkered Shoes";
		nameTag_6108.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page12.add(nameTag_6108);

		// buyBtn_6219
		const buyBtn_6219 = this.add.sprite(530, 554, "jan22clothing", "buyBtn");
		page12.add(buyBtn_6219);

		// priceNum_6219
		const priceNum_6219 = this.add.text(544, 554, "", {});
		priceNum_6219.setOrigin(0.5, 0.5);
		priceNum_6219.text = "250";
		priceNum_6219.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page12.add(priceNum_6219);

		// nameTag_6219
		const nameTag_6219 = this.add.text(538, 516, "", {});
		nameTag_6219.setOrigin(0.5, 0.5);
		nameTag_6219.text = "Gold Checkered Shoes";
		nameTag_6219.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page12.add(nameTag_6219);

		// buyBtn_6106
		const buyBtn_6106 = this.add.sprite(242, 727, "jan22clothing", "buyBtn");
		page12.add(buyBtn_6106);

		// priceNum_6106
		const priceNum_6106 = this.add.text(256, 727, "", {});
		priceNum_6106.setOrigin(0.5, 0.5);
		priceNum_6106.text = "250";
		priceNum_6106.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page12.add(priceNum_6106);

		// nameTag_6106
		const nameTag_6106 = this.add.text(250, 689, "", {});
		nameTag_6106.setOrigin(0.5, 0.5);
		nameTag_6106.text = "Purple Checkered Shoes";
		nameTag_6106.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page12.add(nameTag_6106);

		// buyBtn_6103
		const buyBtn_6103 = this.add.sprite(534, 740, "jan22clothing", "buyBtn");
		page12.add(buyBtn_6103);

		// priceNum_6103
		const priceNum_6103 = this.add.text(548, 740, "", {});
		priceNum_6103.setOrigin(0.5, 0.5);
		priceNum_6103.text = "250";
		priceNum_6103.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page12.add(priceNum_6103);

		// nameTag_6103
		const nameTag_6103 = this.add.text(542, 702, "", {});
		nameTag_6103.setOrigin(0.5, 0.5);
		nameTag_6103.text = "Red Checkered Shoes";
		nameTag_6103.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page12.add(nameTag_6103);

		// buyBtn_6003
		const buyBtn_6003 = this.add.sprite(943, 332, "jan22clothing", "buyBtn");
		page12.add(buyBtn_6003);

		// priceNum_6003
		const priceNum_6003 = this.add.text(957, 332, "", {});
		priceNum_6003.setOrigin(0.5, 0.5);
		priceNum_6003.text = "250";
		priceNum_6003.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page12.add(priceNum_6003);

		// nameTag_6003
		const nameTag_6003 = this.add.text(951, 294, "", {});
		nameTag_6003.setOrigin(0.5, 0.5);
		nameTag_6003.text = "Pink Checkered Shoes";
		nameTag_6003.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page12.add(nameTag_6003);

		// buyBtn_6004
		const buyBtn_6004 = this.add.sprite(1250, 330, "jan22clothing", "buyBtn");
		page12.add(buyBtn_6004);

		// priceNum_6004
		const priceNum_6004 = this.add.text(1264, 330, "", {});
		priceNum_6004.setOrigin(0.5, 0.5);
		priceNum_6004.text = "250";
		priceNum_6004.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page12.add(priceNum_6004);

		// nameTag_6004
		const nameTag_6004 = this.add.text(1258, 292, "", {});
		nameTag_6004.setOrigin(0.5, 0.5);
		nameTag_6004.text = "Black Checkered Shoes";
		nameTag_6004.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page12.add(nameTag_6004);

		// buyBtn_6064
		const buyBtn_6064 = this.add.sprite(938, 541, "jan22clothing", "buyBtn");
		page12.add(buyBtn_6064);

		// priceNum_6064
		const priceNum_6064 = this.add.text(952, 541, "", {});
		priceNum_6064.setOrigin(0.5, 0.5);
		priceNum_6064.text = "250";
		priceNum_6064.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page12.add(priceNum_6064);

		// nameTag_6064
		const nameTag_6064 = this.add.text(946, 503, "", {});
		nameTag_6064.setOrigin(0.5, 0.5);
		nameTag_6064.text = "Green Checkered Shoes";
		nameTag_6064.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page12.add(nameTag_6064);

		// buyBtn_6105
		const buyBtn_6105 = this.add.sprite(1243, 532, "jan22clothing", "buyBtn");
		page12.add(buyBtn_6105);

		// priceNum_6105
		const priceNum_6105 = this.add.text(1257, 532, "", {});
		priceNum_6105.setOrigin(0.5, 0.5);
		priceNum_6105.text = "250";
		priceNum_6105.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page12.add(priceNum_6105);

		// nameTag_6105
		const nameTag_6105 = this.add.text(1251, 494, "", {});
		nameTag_6105.setOrigin(0.5, 0.5);
		nameTag_6105.text = "Yellow Checkered Shoes";
		nameTag_6105.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page12.add(nameTag_6105);

		// buyBtn_6107
		const buyBtn_6107 = this.add.sprite(938, 731, "jan22clothing", "buyBtn");
		page12.add(buyBtn_6107);

		// priceNum_6107
		const priceNum_6107 = this.add.text(952, 731, "", {});
		priceNum_6107.setOrigin(0.5, 0.5);
		priceNum_6107.text = "250";
		priceNum_6107.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page12.add(priceNum_6107);

		// nameTag_6107
		const nameTag_6107 = this.add.text(946, 693, "", {});
		nameTag_6107.setOrigin(0.5, 0.5);
		nameTag_6107.text = "White Checkered Shoes";
		nameTag_6107.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page12.add(nameTag_6107);

		// buyBtn_6050
		const buyBtn_6050 = this.add.sprite(1245, 737, "jan22clothing", "buyBtn");
		page12.add(buyBtn_6050);

		// priceNum_6050
		const priceNum_6050 = this.add.text(1259, 737, "", {});
		priceNum_6050.setOrigin(0.5, 0.5);
		priceNum_6050.text = "250";
		priceNum_6050.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page12.add(priceNum_6050);

		// nameTag_6050
		const nameTag_6050 = this.add.text(1253, 699, "", {});
		nameTag_6050.setOrigin(0.5, 0.5);
		nameTag_6050.text = "Orange Checkered Shoes";
		nameTag_6050.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page12.add(nameTag_6050);

		// secret_black_kicks
		const secret_black_kicks = this.add.rectangle(540, 114, 150, 150);
		secret_black_kicks.angle = -10;
		secret_black_kicks.fillColor = 2551787;
		secret_black_kicks.fillAlpha = 0.5;
		page12.add(secret_black_kicks);

		// page11
		const page11 = this.add.container(0, 0);
		page11.visible = false;
		container.add(page11);

		// page11_bg
		const page11_bg = this.add.image(760, 480, "jan22clothing", "page0011");
		page11.add(page11_bg);

		// buyBtn_1373
		const buyBtn_1373 = this.add.sprite(190, 237, "jan22clothing", "buyBtn");
		page11.add(buyBtn_1373);

		// priceNum_1373
		const priceNum_1373 = this.add.text(204, 237, "", {});
		priceNum_1373.setOrigin(0.5, 0.5);
		priceNum_1373.text = "250";
		priceNum_1373.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page11.add(priceNum_1373);

		// nameTag_1373
		const nameTag_1373 = this.add.text(198, 200, "", {});
		nameTag_1373.setOrigin(0.5, 0.5);
		nameTag_1373.text = "The Black Licorice";
		nameTag_1373.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page11.add(nameTag_1373);

		// buyBtn_1372
		const buyBtn_1372 = this.add.sprite(410, 237, "jan22clothing", "buyBtn");
		page11.add(buyBtn_1372);

		// priceNum_1372
		const priceNum_1372 = this.add.text(424, 237, "", {});
		priceNum_1372.setOrigin(0.5, 0.5);
		priceNum_1372.text = "250";
		priceNum_1372.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page11.add(priceNum_1372);

		// nameTag_1372
		const nameTag_1372 = this.add.text(418, 200, "", {});
		nameTag_1372.setOrigin(0.5, 0.5);
		nameTag_1372.text = "The Bubblegum";
		nameTag_1372.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page11.add(nameTag_1372);

		// buyBtn_1371
		const buyBtn_1371 = this.add.sprite(623, 237, "jan22clothing", "buyBtn");
		page11.add(buyBtn_1371);

		// priceNum_1371
		const priceNum_1371 = this.add.text(637, 237, "", {});
		priceNum_1371.setOrigin(0.5, 0.5);
		priceNum_1371.text = "250";
		priceNum_1371.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page11.add(priceNum_1371);

		// nameTag_1371
		const nameTag_1371 = this.add.text(631, 200, "", {});
		nameTag_1371.setOrigin(0.5, 0.5);
		nameTag_1371.text = "The Frosting";
		nameTag_1371.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page11.add(nameTag_1371);

		// buyBtn_1370
		const buyBtn_1370 = this.add.sprite(881, 237, "jan22clothing", "buyBtn");
		page11.add(buyBtn_1370);

		// priceNum_1370
		const priceNum_1370 = this.add.text(895, 237, "", {});
		priceNum_1370.setOrigin(0.5, 0.5);
		priceNum_1370.text = "250";
		priceNum_1370.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page11.add(priceNum_1370);

		// nameTag_1370
		const nameTag_1370 = this.add.text(889, 200, "", {});
		nameTag_1370.setOrigin(0.5, 0.5);
		nameTag_1370.text = "The Red Licorice";
		nameTag_1370.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page11.add(nameTag_1370);

		// buyBtn_4304
		const buyBtn_4304 = this.add.sprite(190, 462, "jan22clothing", "buyBtn");
		page11.add(buyBtn_4304);

		// priceNum_4304
		const priceNum_4304 = this.add.text(204, 462, "", {});
		priceNum_4304.setOrigin(0.5, 0.5);
		priceNum_4304.text = "250";
		priceNum_4304.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page11.add(priceNum_4304);

		// nameTag_4304
		const nameTag_4304 = this.add.text(198, 419, "", {});
		nameTag_4304.setOrigin(0.5, 0.5);
		nameTag_4304.text = "I Heart My Black Puffle Shirt";
		nameTag_4304.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		nameTag_4304.setWordWrapWidth(170);
		page11.add(nameTag_4304);

		// buyBtn_4303
		const buyBtn_4303 = this.add.sprite(410, 462, "jan22clothing", "buyBtn");
		page11.add(buyBtn_4303);

		// priceNum_4303
		const priceNum_4303 = this.add.text(424, 462, "", {});
		priceNum_4303.setOrigin(0.5, 0.5);
		priceNum_4303.text = "250";
		priceNum_4303.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page11.add(priceNum_4303);

		// nameTag_4303
		const nameTag_4303 = this.add.text(417, 419, "", {});
		nameTag_4303.setOrigin(0.5, 0.5);
		nameTag_4303.text = "I Heart My Pink Puffle Shirt";
		nameTag_4303.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		nameTag_4303.setWordWrapWidth(170);
		page11.add(nameTag_4303);

		// buyBtn_4302
		const buyBtn_4302 = this.add.sprite(623, 462, "jan22clothing", "buyBtn");
		page11.add(buyBtn_4302);

		// priceNum_4302
		const priceNum_4302 = this.add.text(637, 462, "", {});
		priceNum_4302.setOrigin(0.5, 0.5);
		priceNum_4302.text = "250";
		priceNum_4302.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page11.add(priceNum_4302);

		// nameTag_4302
		const nameTag_4302 = this.add.text(632, 419, "", {});
		nameTag_4302.setOrigin(0.5, 0.5);
		nameTag_4302.text = "I Heart My Blue Puffle Shirt";
		nameTag_4302.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		nameTag_4302.setWordWrapWidth(170);
		page11.add(nameTag_4302);

		// buyBtn_4301
		const buyBtn_4301 = this.add.sprite(881, 462, "jan22clothing", "buyBtn");
		page11.add(buyBtn_4301);

		// priceNum_4301
		const priceNum_4301 = this.add.text(895, 462, "", {});
		priceNum_4301.setOrigin(0.5, 0.5);
		priceNum_4301.text = "250";
		priceNum_4301.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page11.add(priceNum_4301);

		// nameTag_4301
		const nameTag_4301 = this.add.text(888, 420, "", {});
		nameTag_4301.setOrigin(0.5, 0.5);
		nameTag_4301.text = "I Heart My Red Puffle Shirt";
		nameTag_4301.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		nameTag_4301.setWordWrapWidth(170);
		page11.add(nameTag_4301);

		// buyBtn_1844
		const buyBtn_1844 = this.add.sprite(190, 694, "jan22clothing", "buyBtn");
		page11.add(buyBtn_1844);

		// priceNum_1844
		const priceNum_1844 = this.add.text(204, 694, "", {});
		priceNum_1844.setOrigin(0.5, 0.5);
		priceNum_1844.text = "250";
		priceNum_1844.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page11.add(priceNum_1844);

		// nameTag_1844
		const nameTag_1844 = this.add.text(198, 657, "", {});
		nameTag_1844.setOrigin(0.5, 0.5);
		nameTag_1844.text = "The Goldilocks";
		nameTag_1844.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page11.add(nameTag_1844);

		// buyBtn_24062
		const buyBtn_24062 = this.add.sprite(410, 700, "jan22clothing", "buyBtn");
		page11.add(buyBtn_24062);

		// priceNum_24062
		const priceNum_24062 = this.add.text(424, 700, "", {});
		priceNum_24062.setOrigin(0.5, 0.5);
		priceNum_24062.text = "250";
		priceNum_24062.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page11.add(priceNum_24062);

		// nameTag_24062
		const nameTag_24062 = this.add.text(417, 657, "", {});
		nameTag_24062.setOrigin(0.5, 0.5);
		nameTag_24062.text = "I Heart My Gold Puffle Shirt";
		nameTag_24062.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		nameTag_24062.setWordWrapWidth(170);
		page11.add(nameTag_24062);

		// buyBtn_1846
		const buyBtn_1846 = this.add.sprite(623, 693, "jan22clothing", "buyBtn");
		page11.add(buyBtn_1846);

		// priceNum_1846
		const priceNum_1846 = this.add.text(637, 693, "", {});
		priceNum_1846.setOrigin(0.5, 0.5);
		priceNum_1846.text = "250";
		priceNum_1846.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page11.add(priceNum_1846);

		// nameTag_1846
		const nameTag_1846 = this.add.text(631, 656, "", {});
		nameTag_1846.setOrigin(0.5, 0.5);
		nameTag_1846.text = "The Rainbow Curls";
		nameTag_1846.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page11.add(nameTag_1846);

		// buyBtn_4811
		const buyBtn_4811 = this.add.sprite(875, 694, "jan22clothing", "buyBtn");
		page11.add(buyBtn_4811);

		// priceNum_4811
		const priceNum_4811 = this.add.text(889, 694, "", {});
		priceNum_4811.setOrigin(0.5, 0.5);
		priceNum_4811.text = "250";
		priceNum_4811.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page11.add(priceNum_4811);

		// nameTag_4811
		const nameTag_4811 = this.add.text(883, 650, "", {});
		nameTag_4811.setOrigin(0.5, 0.5);
		nameTag_4811.text = "I Heart My Rainbow Puffle Shirt";
		nameTag_4811.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		nameTag_4811.setWordWrapWidth(170);
		page11.add(nameTag_4811);

		// page10
		const page10 = this.add.container(0, 0);
		page10.visible = false;
		container.add(page10);

		// page10_bg
		const page10_bg = this.add.image(760, 480, "jan22clothing", "page0010");
		page10.add(page10_bg);

		// buyBtn_1365
		const buyBtn_1365 = this.add.sprite(615, 241, "jan22clothing", "buyBtn");
		page10.add(buyBtn_1365);

		// priceNum_1365
		const priceNum_1365 = this.add.text(630, 241, "", {});
		priceNum_1365.setOrigin(0.5, 0.5);
		priceNum_1365.text = "250";
		priceNum_1365.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page10.add(priceNum_1365);

		// nameTag_1365
		const nameTag_1365 = this.add.text(624, 204, "", {});
		nameTag_1365.setOrigin(0.5, 0.5);
		nameTag_1365.text = "The Banana";
		nameTag_1365.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page10.add(nameTag_1365);

		// buyBtn_1360
		const buyBtn_1360 = this.add.sprite(862, 241, "jan22clothing", "buyBtn");
		page10.add(buyBtn_1360);

		// priceNum_1360
		const priceNum_1360 = this.add.text(876, 241, "", {});
		priceNum_1360.setOrigin(0.5, 0.5);
		priceNum_1360.text = "250";
		priceNum_1360.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page10.add(priceNum_1360);

		// nameTag_1360
		const nameTag_1360 = this.add.text(870, 204, "", {});
		nameTag_1360.setOrigin(0.5, 0.5);
		nameTag_1360.text = "The Strawberry";
		nameTag_1360.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page10.add(nameTag_1360);

		// buyBtn_1361
		const buyBtn_1361 = this.add.sprite(1076, 241, "jan22clothing", "buyBtn");
		page10.add(buyBtn_1361);

		// priceNum_1361
		const priceNum_1361 = this.add.text(1090, 241, "", {});
		priceNum_1361.setOrigin(0.5, 0.5);
		priceNum_1361.text = "250";
		priceNum_1361.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page10.add(priceNum_1361);

		// nameTag_1361
		const nameTag_1361 = this.add.text(1084, 204, "", {});
		nameTag_1361.setOrigin(0.5, 0.5);
		nameTag_1361.text = "The Blueberry";
		nameTag_1361.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page10.add(nameTag_1361);

		// buyBtn_1362
		const buyBtn_1362 = this.add.sprite(1285, 241, "jan22clothing", "buyBtn");
		page10.add(buyBtn_1362);

		// priceNum_1362
		const priceNum_1362 = this.add.text(1299, 241, "", {});
		priceNum_1362.setOrigin(0.5, 0.5);
		priceNum_1362.text = "250";
		priceNum_1362.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page10.add(priceNum_1362);

		// nameTag_1362
		const nameTag_1362 = this.add.text(1293, 204, "", {});
		nameTag_1362.setOrigin(0.5, 0.5);
		nameTag_1362.text = "The Watermelon";
		nameTag_1362.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page10.add(nameTag_1362);

		// buyBtn_315
		const buyBtn_315 = this.add.sprite(1289, 441, "jan22clothing", "buyBtn");
		page10.add(buyBtn_315);

		// priceNum_315
		const priceNum_315 = this.add.text(1303, 441, "", {});
		priceNum_315.setOrigin(0.5, 0.5);
		priceNum_315.text = "250";
		priceNum_315.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page10.add(priceNum_315);

		// nameTag_315
		const nameTag_315 = this.add.text(1297, 404, "", {});
		nameTag_315.setOrigin(0.5, 0.5);
		nameTag_315.text = "Pink Cape";
		nameTag_315.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page10.add(nameTag_315);

		// buyBtn_302
		const buyBtn_302 = this.add.sprite(1079, 441, "jan22clothing", "buyBtn");
		page10.add(buyBtn_302);

		// priceNum_302
		const priceNum_302 = this.add.text(1093, 441, "", {});
		priceNum_302.setOrigin(0.5, 0.5);
		priceNum_302.text = "250";
		priceNum_302.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page10.add(priceNum_302);

		// nameTag_302
		const nameTag_302 = this.add.text(1087, 404, "", {});
		nameTag_302.setOrigin(0.5, 0.5);
		nameTag_302.text = "Blue Cape";
		nameTag_302.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page10.add(nameTag_302);

		// buyBtn_301
		const buyBtn_301 = this.add.sprite(866, 441, "jan22clothing", "buyBtn");
		page10.add(buyBtn_301);

		// priceNum_301
		const priceNum_301 = this.add.text(880, 441, "", {});
		priceNum_301.setOrigin(0.5, 0.5);
		priceNum_301.text = "250";
		priceNum_301.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page10.add(priceNum_301);

		// nameTag_301
		const nameTag_301 = this.add.text(874, 404, "", {});
		nameTag_301.setOrigin(0.5, 0.5);
		nameTag_301.text = "Red Cape";
		nameTag_301.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page10.add(nameTag_301);

		// buyBtn_3007
		const buyBtn_3007 = this.add.sprite(619, 441, "jan22clothing", "buyBtn");
		page10.add(buyBtn_3007);

		// priceNum_3007
		const priceNum_3007 = this.add.text(634, 441, "", {});
		priceNum_3007.setOrigin(0.5, 0.5);
		priceNum_3007.text = "250";
		priceNum_3007.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page10.add(priceNum_3007);

		// nameTag_3007
		const nameTag_3007 = this.add.text(628, 404, "", {});
		nameTag_3007.setOrigin(0.5, 0.5);
		nameTag_3007.text = "Yellow Cape";
		nameTag_3007.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page10.add(nameTag_3007);

		// buyBtn_303
		const buyBtn_303 = this.add.sprite(1288, 653, "jan22clothing", "buyBtn");
		page10.add(buyBtn_303);

		// priceNum_303
		const priceNum_303 = this.add.text(1302, 653, "", {});
		priceNum_303.setOrigin(0.5, 0.5);
		priceNum_303.text = "250";
		priceNum_303.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page10.add(priceNum_303);

		// nameTag_303
		const nameTag_303 = this.add.text(1296, 616, "", {});
		nameTag_303.setOrigin(0.5, 0.5);
		nameTag_303.text = "Black Cape";
		nameTag_303.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page10.add(nameTag_303);

		// buyBtn_1363
		const buyBtn_1363 = this.add.sprite(1079, 653, "jan22clothing", "buyBtn");
		page10.add(buyBtn_1363);

		// priceNum_1363
		const priceNum_1363 = this.add.text(1093, 653, "", {});
		priceNum_1363.setOrigin(0.5, 0.5);
		priceNum_1363.text = "250";
		priceNum_1363.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page10.add(priceNum_1363);

		// nameTag_1363
		const nameTag_1363 = this.add.text(1087, 616, "", {});
		nameTag_1363.setOrigin(0.5, 0.5);
		nameTag_1363.text = "The Blackberry";
		nameTag_1363.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page10.add(nameTag_1363);

		// buyBtn_3102
		const buyBtn_3102 = this.add.sprite(865, 653, "jan22clothing", "buyBtn");
		page10.add(buyBtn_3102);

		// priceNum_3102
		const priceNum_3102 = this.add.text(879, 653, "", {});
		priceNum_3102.setOrigin(0.5, 0.5);
		priceNum_3102.text = "250";
		priceNum_3102.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page10.add(priceNum_3102);

		// nameTag_3102
		const nameTag_3102 = this.add.text(873, 616, "", {});
		nameTag_3102.setOrigin(0.5, 0.5);
		nameTag_3102.text = "Green Cape";
		nameTag_3102.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page10.add(nameTag_3102);

		// buyBtn_1364
		const buyBtn_1364 = this.add.sprite(618, 653, "jan22clothing", "buyBtn");
		page10.add(buyBtn_1364);

		// priceNum_1364
		const priceNum_1364 = this.add.text(633, 653, "", {});
		priceNum_1364.setOrigin(0.5, 0.5);
		priceNum_1364.text = "250";
		priceNum_1364.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page10.add(priceNum_1364);

		// nameTag_1364
		const nameTag_1364 = this.add.text(627, 616, "", {});
		nameTag_1364.setOrigin(0.5, 0.5);
		nameTag_1364.text = "The Lime";
		nameTag_1364.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page10.add(nameTag_1364);

		// page9
		const page9 = this.add.container(0, 0);
		page9.visible = false;
		container.add(page9);

		// page9_bg
		const page9_bg = this.add.image(760, 480, "jan22clothing", "page0009");
		page9.add(page9_bg);

		// buyBtn_1379
		const buyBtn_1379 = this.add.sprite(201, 233, "jan22clothing", "buyBtn");
		page9.add(buyBtn_1379);

		// priceNum_1379
		const priceNum_1379 = this.add.text(215, 233, "", {});
		priceNum_1379.setOrigin(0.5, 0.5);
		priceNum_1379.text = "250";
		priceNum_1379.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page9.add(priceNum_1379);

		// nameTag_1379
		const nameTag_1379 = this.add.text(209, 196, "", {});
		nameTag_1379.setOrigin(0.5, 0.5);
		nameTag_1379.text = "The Chocolate";
		nameTag_1379.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page9.add(nameTag_1379);

		// buyBtn_1378
		const buyBtn_1378 = this.add.sprite(421, 233, "jan22clothing", "buyBtn");
		page9.add(buyBtn_1378);

		// priceNum_1378
		const priceNum_1378 = this.add.text(435, 233, "", {});
		priceNum_1378.setOrigin(0.5, 0.5);
		priceNum_1378.text = "250";
		priceNum_1378.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page9.add(priceNum_1378);

		// nameTag_1378
		const nameTag_1378 = this.add.text(429, 196, "", {});
		nameTag_1378.setOrigin(0.5, 0.5);
		nameTag_1378.text = "The Gummy";
		nameTag_1378.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page9.add(nameTag_1378);

		// buyBtn_1377
		const buyBtn_1377 = this.add.sprite(634, 233, "jan22clothing", "buyBtn");
		page9.add(buyBtn_1377);

		// priceNum_1377
		const priceNum_1377 = this.add.text(648, 233, "", {});
		priceNum_1377.setOrigin(0.5, 0.5);
		priceNum_1377.text = "250";
		priceNum_1377.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page9.add(priceNum_1377);

		// nameTag_1377
		const nameTag_1377 = this.add.text(642, 196, "", {});
		nameTag_1377.setOrigin(0.5, 0.5);
		nameTag_1377.text = "The Whipped Cream";
		nameTag_1377.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page9.add(nameTag_1377);

		// buyBtn_1376
		const buyBtn_1376 = this.add.sprite(892, 233, "jan22clothing", "buyBtn");
		page9.add(buyBtn_1376);

		// priceNum_1376
		const priceNum_1376 = this.add.text(906, 233, "", {});
		priceNum_1376.setOrigin(0.5, 0.5);
		priceNum_1376.text = "250";
		priceNum_1376.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page9.add(priceNum_1376);

		// nameTag_1376
		const nameTag_1376 = this.add.text(900, 196, "", {});
		nameTag_1376.setOrigin(0.5, 0.5);
		nameTag_1376.text = "The Sprinkles";
		nameTag_1376.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page9.add(nameTag_1376);

		// buyBtn_4310
		const buyBtn_4310 = this.add.sprite(201, 458, "jan22clothing", "buyBtn");
		page9.add(buyBtn_4310);

		// priceNum_4310
		const priceNum_4310 = this.add.text(215, 458, "", {});
		priceNum_4310.setOrigin(0.5, 0.5);
		priceNum_4310.text = "250";
		priceNum_4310.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page9.add(priceNum_4310);

		// nameTag_4310
		const nameTag_4310 = this.add.text(209, 415, "", {});
		nameTag_4310.setOrigin(0.5, 0.5);
		nameTag_4310.text = "I Heart My Brown Puffle Shirt";
		nameTag_4310.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		nameTag_4310.setWordWrapWidth(170);
		page9.add(nameTag_4310);

		// buyBtn_4309
		const buyBtn_4309 = this.add.sprite(421, 458, "jan22clothing", "buyBtn");
		page9.add(buyBtn_4309);

		// priceNum_4309
		const priceNum_4309 = this.add.text(435, 458, "", {});
		priceNum_4309.setOrigin(0.5, 0.5);
		priceNum_4309.text = "250";
		priceNum_4309.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page9.add(priceNum_4309);

		// nameTag_4309
		const nameTag_4309 = this.add.text(428, 415, "", {});
		nameTag_4309.setOrigin(0.5, 0.5);
		nameTag_4309.text = "I Heart My Orange Puffle Shirt";
		nameTag_4309.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		nameTag_4309.setWordWrapWidth(170);
		page9.add(nameTag_4309);

		// buyBtn_4308
		const buyBtn_4308 = this.add.sprite(634, 458, "jan22clothing", "buyBtn");
		page9.add(buyBtn_4308);

		// priceNum_4308
		const priceNum_4308 = this.add.text(648, 458, "", {});
		priceNum_4308.setOrigin(0.5, 0.5);
		priceNum_4308.text = "250";
		priceNum_4308.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page9.add(priceNum_4308);

		// nameTag_4308
		const nameTag_4308 = this.add.text(643, 415, "", {});
		nameTag_4308.setOrigin(0.5, 0.5);
		nameTag_4308.text = "I Heart My White Puffle Shirt";
		nameTag_4308.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		nameTag_4308.setWordWrapWidth(170);
		page9.add(nameTag_4308);

		// buyBtn_4307
		const buyBtn_4307 = this.add.sprite(892, 458, "jan22clothing", "buyBtn");
		page9.add(buyBtn_4307);

		// priceNum_4307
		const priceNum_4307 = this.add.text(906, 458, "", {});
		priceNum_4307.setOrigin(0.5, 0.5);
		priceNum_4307.text = "250";
		priceNum_4307.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page9.add(priceNum_4307);

		// nameTag_4307
		const nameTag_4307 = this.add.text(899, 416, "", {});
		nameTag_4307.setOrigin(0.5, 0.5);
		nameTag_4307.text = "I Heart My Purple Puffle Shirt";
		nameTag_4307.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		nameTag_4307.setWordWrapWidth(170);
		page9.add(nameTag_4307);

		// buyBtn_1375
		const buyBtn_1375 = this.add.sprite(201, 690, "jan22clothing", "buyBtn");
		page9.add(buyBtn_1375);

		// priceNum_1375
		const priceNum_1375 = this.add.text(215, 690, "", {});
		priceNum_1375.setOrigin(0.5, 0.5);
		priceNum_1375.text = "250";
		priceNum_1375.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page9.add(priceNum_1375);

		// nameTag_1375
		const nameTag_1375 = this.add.text(209, 653, "", {});
		nameTag_1375.setOrigin(0.5, 0.5);
		nameTag_1375.text = "The Honeycomb";
		nameTag_1375.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page9.add(nameTag_1375);

		// buyBtn_4306
		const buyBtn_4306 = this.add.sprite(421, 696, "jan22clothing", "buyBtn");
		page9.add(buyBtn_4306);

		// priceNum_4306
		const priceNum_4306 = this.add.text(435, 696, "", {});
		priceNum_4306.setOrigin(0.5, 0.5);
		priceNum_4306.text = "250";
		priceNum_4306.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page9.add(priceNum_4306);

		// nameTag_4306
		const nameTag_4306 = this.add.text(428, 653, "", {});
		nameTag_4306.setOrigin(0.5, 0.5);
		nameTag_4306.text = "I Heart My Yellow Puffle Shirt";
		nameTag_4306.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		nameTag_4306.setWordWrapWidth(170);
		page9.add(nameTag_4306);

		// buyBtn_1374
		const buyBtn_1374 = this.add.sprite(634, 689, "jan22clothing", "buyBtn");
		page9.add(buyBtn_1374);

		// priceNum_1374
		const priceNum_1374 = this.add.text(648, 689, "", {});
		priceNum_1374.setOrigin(0.5, 0.5);
		priceNum_1374.text = "250";
		priceNum_1374.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page9.add(priceNum_1374);

		// nameTag_1374
		const nameTag_1374 = this.add.text(642, 652, "", {});
		nameTag_1374.setOrigin(0.5, 0.5);
		nameTag_1374.text = "The Peppermint";
		nameTag_1374.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page9.add(nameTag_1374);

		// buyBtn_4305
		const buyBtn_4305 = this.add.sprite(886, 690, "jan22clothing", "buyBtn");
		page9.add(buyBtn_4305);

		// priceNum_4305
		const priceNum_4305 = this.add.text(900, 690, "", {});
		priceNum_4305.setOrigin(0.5, 0.5);
		priceNum_4305.text = "250";
		priceNum_4305.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page9.add(priceNum_4305);

		// nameTag_4305
		const nameTag_4305 = this.add.text(894, 646, "", {});
		nameTag_4305.setOrigin(0.5, 0.5);
		nameTag_4305.text = "I Heart My Green Puffle Shirt";
		nameTag_4305.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		nameTag_4305.setWordWrapWidth(170);
		page9.add(nameTag_4305);

		// secret_snow_style_jacket
		const secret_snow_style_jacket = this.add.rectangle(1198, 718, 150, 150);
		secret_snow_style_jacket.angle = -10;
		secret_snow_style_jacket.fillColor = 2551787;
		secret_snow_style_jacket.fillAlpha = 0.5;
		page9.add(secret_snow_style_jacket);

		// page8
		const page8 = this.add.container(0, 0);
		page8.visible = false;
		container.add(page8);

		// page8Bg
		const page8Bg = this.add.image(760, 480, "jan22clothing", "page0008");
		page8.add(page8Bg);

		// buyBtn_1368
		const buyBtn_1368 = this.add.sprite(1079, 271, "jan22clothing", "buyBtn");
		page8.add(buyBtn_1368);

		// priceNum_1368
		const priceNum_1368 = this.add.text(1093, 271, "", {});
		priceNum_1368.setOrigin(0.5, 0.5);
		priceNum_1368.text = "250";
		priceNum_1368.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page8.add(priceNum_1368);

		// nameTag_1368
		const nameTag_1368 = this.add.text(1087, 234, "", {});
		nameTag_1368.setOrigin(0.5, 0.5);
		nameTag_1368.text = "The Orange";
		nameTag_1368.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page8.add(nameTag_1368);

		// buyBtn_1367
		const buyBtn_1367 = this.add.sprite(869, 271, "jan22clothing", "buyBtn");
		page8.add(buyBtn_1367);

		// priceNum_1367
		const priceNum_1367 = this.add.text(883, 271, "", {});
		priceNum_1367.setOrigin(0.5, 0.5);
		priceNum_1367.text = "250";
		priceNum_1367.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page8.add(priceNum_1367);

		// nameTag_1367
		const nameTag_1367 = this.add.text(877, 234, "", {});
		nameTag_1367.setOrigin(0.5, 0.5);
		nameTag_1367.text = "The Coconut";
		nameTag_1367.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page8.add(nameTag_1367);

		// buyBtn_1369
		const buyBtn_1369 = this.add.sprite(1295, 271, "jan22clothing", "buyBtn");
		page8.add(buyBtn_1369);

		// priceNum_1369
		const priceNum_1369 = this.add.text(1309, 271, "", {});
		priceNum_1369.setOrigin(0.5, 0.5);
		priceNum_1369.text = "250";
		priceNum_1369.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page8.add(priceNum_1369);

		// nameTag_1369
		const nameTag_1369 = this.add.text(1303, 234, "", {});
		nameTag_1369.setOrigin(0.5, 0.5);
		nameTag_1369.text = "The Pear";
		nameTag_1369.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page8.add(nameTag_1369);

		// buyBtn_3107
		const buyBtn_3107 = this.add.sprite(1295, 459, "jan22clothing", "buyBtn");
		page8.add(buyBtn_3107);

		// priceNum_3107
		const priceNum_3107 = this.add.text(1309, 459, "", {});
		priceNum_3107.setOrigin(0.5, 0.5);
		priceNum_3107.text = "200";
		priceNum_3107.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page8.add(priceNum_3107);

		// nameTag_3107
		const nameTag_3107 = this.add.text(1303, 422, "", {});
		nameTag_3107.setOrigin(0.5, 0.5);
		nameTag_3107.text = "Brown Cape";
		nameTag_3107.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page8.add(nameTag_3107);

		// buyBtn_3106
		const buyBtn_3106 = this.add.sprite(1079, 459, "jan22clothing", "buyBtn");
		page8.add(buyBtn_3106);

		// priceNum_3106
		const priceNum_3106 = this.add.text(1093, 459, "", {});
		priceNum_3106.setOrigin(0.5, 0.5);
		priceNum_3106.text = "200";
		priceNum_3106.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page8.add(priceNum_3106);

		// nameTag_3106
		const nameTag_3106 = this.add.text(1087, 422, "", {});
		nameTag_3106.setOrigin(0.5, 0.5);
		nameTag_3106.text = "Orange Cape";
		nameTag_3106.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page8.add(nameTag_3106);

		// buyBtn_3105
		const buyBtn_3105 = this.add.sprite(869, 459, "jan22clothing", "buyBtn");
		page8.add(buyBtn_3105);

		// priceNum_3105
		const priceNum_3105 = this.add.text(883, 459, "", {});
		priceNum_3105.setOrigin(0.5, 0.5);
		priceNum_3105.text = "200";
		priceNum_3105.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page8.add(priceNum_3105);

		// nameTag_3105
		const nameTag_3105 = this.add.text(877, 422, "", {});
		nameTag_3105.setOrigin(0.5, 0.5);
		nameTag_3105.text = "White Cape";
		nameTag_3105.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page8.add(nameTag_3105);

		// buyBtn_3205
		const buyBtn_3205 = this.add.sprite(869, 668, "jan22clothing", "buyBtn");
		page8.add(buyBtn_3205);

		// priceNum_3205
		const priceNum_3205 = this.add.text(883, 668, "", {});
		priceNum_3205.setOrigin(0.5, 0.5);
		priceNum_3205.text = "200";
		priceNum_3205.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page8.add(priceNum_3205);

		// nameTag_3205
		const nameTag_3205 = this.add.text(877, 631, "", {});
		nameTag_3205.setOrigin(0.5, 0.5);
		nameTag_3205.text = "Gold Cape";
		nameTag_3205.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page8.add(nameTag_3205);

		// buyBtn_1847
		const buyBtn_1847 = this.add.sprite(1079, 668, "jan22clothing", "buyBtn");
		page8.add(buyBtn_1847);

		// priceNum_1847
		const priceNum_1847 = this.add.text(1093, 668, "", {});
		priceNum_1847.setOrigin(0.5, 0.5);
		priceNum_1847.text = "250";
		priceNum_1847.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page8.add(priceNum_1847);

		// nameTag_1847
		const nameTag_1847 = this.add.text(1087, 631, "", {});
		nameTag_1847.setOrigin(0.5, 0.5);
		nameTag_1847.text = "The Rainbow Sweep";
		nameTag_1847.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page8.add(nameTag_1847);

		// buyBtn_3206
		const buyBtn_3206 = this.add.sprite(1295, 668, "jan22clothing", "buyBtn");
		page8.add(buyBtn_3206);

		// priceNum_3206
		const priceNum_3206 = this.add.text(1309, 668, "", {});
		priceNum_3206.setOrigin(0.5, 0.5);
		priceNum_3206.text = "200";
		priceNum_3206.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page8.add(priceNum_3206);

		// nameTag_3206
		const nameTag_3206 = this.add.text(1303, 631, "", {});
		nameTag_3206.setOrigin(0.5, 0.5);
		nameTag_3206.text = "Rainbow Cape";
		nameTag_3206.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page8.add(nameTag_3206);

		// buyBtn_1366
		const buyBtn_1366 = this.add.sprite(627, 271, "jan22clothing", "buyBtn");
		page8.add(buyBtn_1366);

		// priceNum_1366
		const priceNum_1366 = this.add.text(641, 271, "", {});
		priceNum_1366.setOrigin(0.5, 0.5);
		priceNum_1366.text = "250";
		priceNum_1366.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page8.add(priceNum_1366);

		// nameTag_1366
		const nameTag_1366 = this.add.text(635, 234, "", {});
		nameTag_1366.setOrigin(0.5, 0.5);
		nameTag_1366.text = "The Grape";
		nameTag_1366.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page8.add(nameTag_1366);

		// buyBtn_3104
		const buyBtn_3104 = this.add.sprite(627, 459, "jan22clothing", "buyBtn");
		page8.add(buyBtn_3104);

		// priceNum_3104
		const priceNum_3104 = this.add.text(641, 459, "", {});
		priceNum_3104.setOrigin(0.5, 0.5);
		priceNum_3104.text = "200";
		priceNum_3104.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page8.add(priceNum_3104);

		// nameTag_3104
		const nameTag_3104 = this.add.text(635, 422, "", {});
		nameTag_3104.setOrigin(0.5, 0.5);
		nameTag_3104.text = "Purple Cape";
		nameTag_3104.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page8.add(nameTag_3104);

		// buyBtn_1845
		const buyBtn_1845 = this.add.sprite(627, 668, "jan22clothing", "buyBtn");
		page8.add(buyBtn_1845);

		// priceNum_1845
		const priceNum_1845 = this.add.text(641, 668, "", {});
		priceNum_1845.setOrigin(0.5, 0.5);
		priceNum_1845.text = "250";
		priceNum_1845.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page8.add(priceNum_1845);

		// nameTag_1845
		const nameTag_1845 = this.add.text(635, 631, "", {});
		nameTag_1845.setOrigin(0.5, 0.5);
		nameTag_1845.text = "The Lux";
		nameTag_1845.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "18px" });
		page8.add(nameTag_1845);

		// page7
		const page7 = this.add.container(0, 0);
		page7.visible = false;
		container.add(page7);

		// page7Bg
		const page7Bg = this.add.image(760, 480, "jan22clothing", "page0007");
		page7.add(page7Bg);

		// buyBtn_1841
		const buyBtn_1841 = this.add.sprite(178, 392, "jan22clothing", "buyBtn");
		page7.add(buyBtn_1841);

		// priceNum_1841
		const priceNum_1841 = this.add.text(192, 392, "", {});
		priceNum_1841.setOrigin(0.5, 0.5);
		priceNum_1841.text = "250";
		priceNum_1841.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page7.add(priceNum_1841);

		// nameTag_1841
		const nameTag_1841 = this.add.text(186, 355, "", {});
		nameTag_1841.setOrigin(0.5, 0.5);
		nameTag_1841.text = "The Orange Kittytail";
		nameTag_1841.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "18px", "fontStyle": "bold" });
		page7.add(nameTag_1841);

		// buyBtn_1843
		const buyBtn_1843 = this.add.sprite(640, 392, "jan22clothing", "buyBtn");
		page7.add(buyBtn_1843);

		// priceNum_1843
		const priceNum_1843 = this.add.text(654, 392, "", {});
		priceNum_1843.setOrigin(0.5, 0.5);
		priceNum_1843.text = "250";
		priceNum_1843.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page7.add(priceNum_1843);

		// nameTag_1843
		const nameTag_1843 = this.add.text(648, 355, "", {});
		nameTag_1843.setOrigin(0.5, 0.5);
		nameTag_1843.text = "The Blue Floppy Ears";
		nameTag_1843.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "18px", "fontStyle": "bold" });
		page7.add(nameTag_1843);

		// buyBtn_1842
		const buyBtn_1842 = this.add.sprite(295, 805, "jan22clothing", "buyBtn");
		page7.add(buyBtn_1842);

		// priceNum_1842
		const priceNum_1842 = this.add.text(309, 805, "", {});
		priceNum_1842.setOrigin(0.5, 0.5);
		priceNum_1842.text = "250";
		priceNum_1842.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page7.add(priceNum_1842);

		// nameTag_1842
		const nameTag_1842 = this.add.text(303, 768, "", {});
		nameTag_1842.setOrigin(0.5, 0.5);
		nameTag_1842.text = "The Blue Doggone";
		nameTag_1842.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "18px", "fontStyle": "bold" });
		page7.add(nameTag_1842);

		// buyBtn_1840
		const buyBtn_1840 = this.add.sprite(643, 805, "jan22clothing", "buyBtn");
		page7.add(buyBtn_1840);

		// priceNum_1840
		const priceNum_1840 = this.add.text(657, 805, "", {});
		priceNum_1840.setOrigin(0.5, 0.5);
		priceNum_1840.text = "250";
		priceNum_1840.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page7.add(priceNum_1840);

		// nameTag_1840
		const nameTag_1840 = this.add.text(651, 768, "", {});
		nameTag_1840.setOrigin(0.5, 0.5);
		nameTag_1840.text = "The Orange Tomcat";
		nameTag_1840.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "18px", "fontStyle": "bold" });
		page7.add(nameTag_1840);

		// buyBtn_3112
		const buyBtn_3112 = this.add.sprite(901, 410, "jan22clothing", "buyBtn");
		page7.add(buyBtn_3112);

		// priceNum_3112
		const priceNum_3112 = this.add.text(915, 410, "", {});
		priceNum_3112.setOrigin(0.5, 0.5);
		priceNum_3112.text = "200";
		priceNum_3112.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page7.add(priceNum_3112);

		// nameTag_3112
		const nameTag_3112 = this.add.text(909, 373, "", {});
		nameTag_3112.setOrigin(0.5, 0.5);
		nameTag_3112.text = "Green Feather Boa";
		nameTag_3112.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "18px", "fontStyle": "bold" });
		page7.add(nameTag_3112);

		// buyBtn_3109
		const buyBtn_3109 = this.add.sprite(1088, 410, "jan22clothing", "buyBtn");
		page7.add(buyBtn_3109);

		// priceNum_3109
		const priceNum_3109 = this.add.text(1102, 410, "", {});
		priceNum_3109.setOrigin(0.5, 0.5);
		priceNum_3109.text = "200";
		priceNum_3109.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page7.add(priceNum_3109);

		// nameTag_3109
		const nameTag_3109 = this.add.text(1096, 373, "", {});
		nameTag_3109.setOrigin(0.5, 0.5);
		nameTag_3109.text = "Blue Feather Boa";
		nameTag_3109.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "18px", "fontStyle": "bold" });
		page7.add(nameTag_3109);

		// buyBtn_3114
		const buyBtn_3114 = this.add.sprite(1278, 410, "jan22clothing", "buyBtn");
		page7.add(buyBtn_3114);

		// priceNum_3114
		const priceNum_3114 = this.add.text(1292, 410, "", {});
		priceNum_3114.setOrigin(0.5, 0.5);
		priceNum_3114.text = "200";
		priceNum_3114.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page7.add(priceNum_3114);

		// nameTag_3114
		const nameTag_3114 = this.add.text(1286, 373, "", {});
		nameTag_3114.setOrigin(0.5, 0.5);
		nameTag_3114.text = "Purple Feather Boa";
		nameTag_3114.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "18px", "fontStyle": "bold" });
		page7.add(nameTag_3114);

		// buyBtn_3108
		const buyBtn_3108 = this.add.sprite(901, 203, "jan22clothing", "buyBtn");
		page7.add(buyBtn_3108);

		// priceNum_3108
		const priceNum_3108 = this.add.text(915, 203, "", {});
		priceNum_3108.setOrigin(0.5, 0.5);
		priceNum_3108.text = "200";
		priceNum_3108.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page7.add(priceNum_3108);

		// nameTag_3108
		const nameTag_3108 = this.add.text(909, 166, "", {});
		nameTag_3108.setOrigin(0.5, 0.5);
		nameTag_3108.text = "Red Feather Boa";
		nameTag_3108.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "18px", "fontStyle": "bold" });
		page7.add(nameTag_3108);

		// buyBtn_3078
		const buyBtn_3078 = this.add.sprite(1088, 203, "jan22clothing", "buyBtn");
		page7.add(buyBtn_3078);

		// priceNum_3078
		const priceNum_3078 = this.add.text(1102, 203, "", {});
		priceNum_3078.setOrigin(0.5, 0.5);
		priceNum_3078.text = "200";
		priceNum_3078.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page7.add(priceNum_3078);

		// nameTag_3078
		const nameTag_3078 = this.add.text(1096, 166, "", {});
		nameTag_3078.setOrigin(0.5, 0.5);
		nameTag_3078.text = "Orange Feather Boa";
		nameTag_3078.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "18px", "fontStyle": "bold" });
		page7.add(nameTag_3078);

		// buyBtn_3113
		const buyBtn_3113 = this.add.sprite(1278, 203, "jan22clothing", "buyBtn");
		page7.add(buyBtn_3113);

		// priceNum_3113
		const priceNum_3113 = this.add.text(1292, 203, "", {});
		priceNum_3113.setOrigin(0.5, 0.5);
		priceNum_3113.text = "200";
		priceNum_3113.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page7.add(priceNum_3113);

		// nameTag_3113
		const nameTag_3113 = this.add.text(1286, 166, "", {});
		nameTag_3113.setOrigin(0.5, 0.5);
		nameTag_3113.text = "Yellow Feather Boa";
		nameTag_3113.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "18px", "fontStyle": "bold" });
		page7.add(nameTag_3113);

		// buyBtn_3100
		const buyBtn_3100 = this.add.sprite(901, 601, "jan22clothing", "buyBtn");
		page7.add(buyBtn_3100);

		// priceNum_3100
		const priceNum_3100 = this.add.text(915, 600, "", {});
		priceNum_3100.setOrigin(0.5, 0.5);
		priceNum_3100.text = "200";
		priceNum_3100.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page7.add(priceNum_3100);

		// nameTag_3100
		const nameTag_3100 = this.add.text(909, 562, "", {});
		nameTag_3100.setOrigin(0.5, 0.5);
		nameTag_3100.text = "White Feather Boa";
		nameTag_3100.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "18px", "fontStyle": "bold" });
		page7.add(nameTag_3100);

		// buyBtn_3110
		const buyBtn_3110 = this.add.sprite(1088, 599, "jan22clothing", "buyBtn");
		page7.add(buyBtn_3110);

		// priceNum_3110
		const priceNum_3110 = this.add.text(1102, 599, "", {});
		priceNum_3110.setOrigin(0.5, 0.5);
		priceNum_3110.text = "200";
		priceNum_3110.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page7.add(priceNum_3110);

		// nameTag_3110
		const nameTag_3110 = this.add.text(1096, 562, "", {});
		nameTag_3110.setOrigin(0.5, 0.5);
		nameTag_3110.text = "Pink Feather Boa";
		nameTag_3110.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "18px", "fontStyle": "bold" });
		page7.add(nameTag_3110);

		// buyBtn_3115
		const buyBtn_3115 = this.add.sprite(1278, 600, "jan22clothing", "buyBtn");
		page7.add(buyBtn_3115);

		// priceNum_3115
		const priceNum_3115 = this.add.text(1292, 600, "", {});
		priceNum_3115.setOrigin(0.5, 0.5);
		priceNum_3115.text = "200";
		priceNum_3115.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page7.add(priceNum_3115);

		// nameTag_3115
		const nameTag_3115 = this.add.text(1286, 563, "", {});
		nameTag_3115.setOrigin(0.5, 0.5);
		nameTag_3115.text = "Brown Feather Boa";
		nameTag_3115.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "18px", "fontStyle": "bold" });
		page7.add(nameTag_3115);

		// buyBtn_3202
		const buyBtn_3202 = this.add.sprite(901, 785, "jan22clothing", "buyBtn");
		page7.add(buyBtn_3202);

		// priceNum_3202
		const priceNum_3202 = this.add.text(915, 785, "", {});
		priceNum_3202.setOrigin(0.5, 0.5);
		priceNum_3202.text = "200";
		priceNum_3202.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page7.add(priceNum_3202);

		// nameTag_3202
		const nameTag_3202 = this.add.text(909, 748, "", {});
		nameTag_3202.setOrigin(0.5, 0.5);
		nameTag_3202.text = "Gold Feather Boa";
		nameTag_3202.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "18px", "fontStyle": "bold" });
		page7.add(nameTag_3202);

		// buyBtn_3203
		const buyBtn_3203 = this.add.sprite(1088, 785, "jan22clothing", "buyBtn");
		page7.add(buyBtn_3203);

		// priceNum_3203
		const priceNum_3203 = this.add.text(1102, 785, "", {});
		priceNum_3203.setOrigin(0.5, 0.5);
		priceNum_3203.text = "200";
		priceNum_3203.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page7.add(priceNum_3203);

		// nameTag_3203
		const nameTag_3203 = this.add.text(1096, 748, "", {});
		nameTag_3203.setOrigin(0.5, 0.5);
		nameTag_3203.text = "Rainbow Feather Boa";
		nameTag_3203.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "18px", "fontStyle": "bold" });
		page7.add(nameTag_3203);

		// buyBtn_3111
		const buyBtn_3111 = this.add.sprite(1278, 785, "jan22clothing", "buyBtn");
		page7.add(buyBtn_3111);

		// priceNum_3111
		const priceNum_3111 = this.add.text(1292, 785, "", {});
		priceNum_3111.setOrigin(0.5, 0.5);
		priceNum_3111.text = "200";
		priceNum_3111.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page7.add(priceNum_3111);

		// nameTag_3111
		const nameTag_3111 = this.add.text(1286, 748, "", {});
		nameTag_3111.setOrigin(0.5, 0.5);
		nameTag_3111.text = "Black Feather Boa";
		nameTag_3111.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "18px", "fontStyle": "bold" });
		page7.add(nameTag_3111);

		// page6
		const page6 = this.add.container(0, 0);
		page6.visible = false;
		container.add(page6);

		// page6Bg
		const page6Bg = this.add.image(760, 480, "jan22clothing", "page0006");
		page6.add(page6Bg);

		// nameTag_6036
		const nameTag_6036 = this.add.text(985, 726, "", {});
		nameTag_6036.setOrigin(0.5, 0.5);
		nameTag_6036.text = "Red Sneakers";
		nameTag_6036.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page6.add(nameTag_6036);

		// buyBtn_6036
		const buyBtn_6036 = this.add.sprite(976, 763, "jan22clothing", "buyBtn");
		page6.add(buyBtn_6036);

		// priceNum_6036
		const priceNum_6036 = this.add.text(990, 764, "", {});
		priceNum_6036.setOrigin(0.5, 0.5);
		priceNum_6036.text = "250";
		priceNum_6036.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page6.add(priceNum_6036);

		// nameTag_6112
		const nameTag_6112 = this.add.text(1220, 726, "", {});
		nameTag_6112.setOrigin(0.5, 0.5);
		nameTag_6112.text = "Brown Canvas Shoes";
		nameTag_6112.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page6.add(nameTag_6112);

		// buyBtn_6112
		const buyBtn_6112 = this.add.sprite(1211, 763, "jan22clothing", "buyBtn");
		page6.add(buyBtn_6112);

		// priceNum_6112
		const priceNum_6112 = this.add.text(1225, 764, "", {});
		priceNum_6112.setOrigin(0.5, 0.5);
		priceNum_6112.text = "200";
		priceNum_6112.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page6.add(priceNum_6112);

		// nameTag_24056
		const nameTag_24056 = this.add.text(980, 519, "", {});
		nameTag_24056.setOrigin(0.5, 0.5);
		nameTag_24056.text = "T-Rex Puffle Tee";
		nameTag_24056.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "20px" });
		page6.add(nameTag_24056);

		// buyBtn_23056
		const buyBtn_23056 = this.add.sprite(971, 566, "jan22clothing", "buyBtn");
		page6.add(buyBtn_23056);

		// priceNum_24056
		const priceNum_24056 = this.add.text(985, 567, "", {});
		priceNum_24056.setOrigin(0.5, 0.5);
		priceNum_24056.text = "300";
		priceNum_24056.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page6.add(priceNum_24056);

		// nameTag_24055
		const nameTag_24055 = this.add.text(1226, 519, "", {});
		nameTag_24055.setOrigin(0.5, 0.5);
		nameTag_24055.text = "Striped Hoodie\nand Jacket";
		nameTag_24055.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "20px" });
		page6.add(nameTag_24055);

		// buyBtn_23055
		const buyBtn_23055 = this.add.sprite(1217, 566, "jan22clothing", "buyBtn");
		page6.add(buyBtn_23055);

		// priceNum_24055
		const priceNum_24055 = this.add.text(1231, 567, "", {});
		priceNum_24055.setOrigin(0.5, 0.5);
		priceNum_24055.text = "300";
		priceNum_24055.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page6.add(priceNum_24055);

		// nameTag_1836
		const nameTag_1836 = this.add.text(1234, 227, "", {});
		nameTag_1836.setOrigin(0.5, 0.5);
		nameTag_1836.text = "The Shade Do";
		nameTag_1836.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page6.add(nameTag_1836);

		// buyBtn_1836
		const buyBtn_1836 = this.add.sprite(1225, 264, "jan22clothing", "buyBtn");
		page6.add(buyBtn_1836);

		// priceNum_1836
		const priceNum_1836 = this.add.text(1239, 265, "", {});
		priceNum_1836.setOrigin(0.5, 0.5);
		priceNum_1836.text = "250";
		priceNum_1836.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page6.add(priceNum_1836);

		// nameTag_1837
		const nameTag_1837 = this.add.text(974, 227, "", {});
		nameTag_1837.setOrigin(0.5, 0.5);
		nameTag_1837.text = "The Up Sweep";
		nameTag_1837.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page6.add(nameTag_1837);

		// buyBtn_1837
		const buyBtn_1837 = this.add.sprite(965, 264, "jan22clothing", "buyBtn");
		page6.add(buyBtn_1837);

		// priceNum_1837
		const priceNum_1837 = this.add.text(979, 265, "", {});
		priceNum_1837.setOrigin(0.5, 0.5);
		priceNum_1837.text = "250";
		priceNum_1837.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page6.add(priceNum_1837);

		// page6_header
		const page6_header = this.add.text(204, 82, "", {});
		page6_header.setOrigin(0.5, 0.5);
		page6_header.text = "Clothing items\nfor everyone";
		page6_header.setStyle({ "fontFamily": "Burbank Small", "fontSize": "27px", "fontStyle": "bold italic" });
		page6.add(page6_header);

		// secret_blue_skater_hat
		const secret_blue_skater_hat = this.add.rectangle(537, 260, 150, 150);
		secret_blue_skater_hat.angle = -10;
		secret_blue_skater_hat.fillColor = 2551787;
		secret_blue_skater_hat.fillAlpha = 0.5;
		page6.add(secret_blue_skater_hat);

		// page5
		const page5 = this.add.container(0, 0);
		page5.visible = false;
		container.add(page5);

		// page5Bg
		const page5Bg = this.add.image(760, 480, "jan22clothing", "page0005");
		page5.add(page5Bg);

		// page5_header
		const page5_header = this.add.text(204, 82, "", {});
		page5_header.setOrigin(0.5, 0.5);
		page5_header.text = "Clothing items\nfor everyone";
		page5_header.setStyle({ "fontFamily": "Burbank Small", "fontSize": "27px", "fontStyle": "bold italic" });
		page5.add(page5_header);

		// buyBtn_1838
		const buyBtn_1838 = this.add.sprite(968, 247, "jan22clothing", "buyBtn");
		page5.add(buyBtn_1838);

		// priceNum_1838
		const priceNum_1838 = this.add.text(982, 248, "", {});
		priceNum_1838.setOrigin(0.5, 0.5);
		priceNum_1838.text = "250";
		priceNum_1838.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page5.add(priceNum_1838);

		// nameTag_1838
		const nameTag_1838 = this.add.text(977, 210, "", {});
		nameTag_1838.setOrigin(0.5, 0.5);
		nameTag_1838.text = "The Archaeologist";
		nameTag_1838.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page5.add(nameTag_1838);

		// buyBtn_1839
		const buyBtn_1839 = this.add.sprite(1203, 247, "jan22clothing", "buyBtn");
		page5.add(buyBtn_1839);

		// priceNum_1839
		const priceNum_1839 = this.add.text(1217, 248, "", {});
		priceNum_1839.setOrigin(0.5, 0.5);
		priceNum_1839.text = "100";
		priceNum_1839.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page5.add(priceNum_1839);

		// nameTag_1839
		const nameTag_1839 = this.add.text(1212, 210, "", {});
		nameTag_1839.setOrigin(0.5, 0.5);
		nameTag_1839.text = "Junior Explorer Hat";
		nameTag_1839.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page5.add(nameTag_1839);

		// buyBtn_24058
		const buyBtn_24058 = this.add.sprite(1203, 505, "jan22clothing", "buyBtn");
		page5.add(buyBtn_24058);

		// priceNum_24058
		const priceNum_24058 = this.add.text(1217, 506, "", {});
		priceNum_24058.setOrigin(0.5, 0.5);
		priceNum_24058.text = "300";
		priceNum_24058.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page5.add(priceNum_24058);

		// nameTag_24058
		const nameTag_24058 = this.add.text(1212, 458, "", {});
		nameTag_24058.setOrigin(0.5, 0.5);
		nameTag_24058.text = "Junior Explorer Outfit";
		nameTag_24058.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page5.add(nameTag_24058);

		// buyBtn_24057
		const buyBtn_24057 = this.add.sprite(968, 505, "jan22clothing", "buyBtn");
		page5.add(buyBtn_24057);

		// priceNum_24057
		const priceNum_24057 = this.add.text(982, 506, "", {});
		priceNum_24057.setOrigin(0.5, 0.5);
		priceNum_24057.text = "300";
		priceNum_24057.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page5.add(priceNum_24057);

		// nameTag_24057
		const nameTag_24057 = this.add.text(977, 458, "", {});
		nameTag_24057.setOrigin(0.5, 0.5);
		nameTag_24057.text = "Outback\nTraveler Outfit";
		nameTag_24057.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "20px" });
		page5.add(nameTag_24057);

		// buyBtn_3200
		const buyBtn_3200 = this.add.sprite(1203, 721, "jan22clothing", "buyBtn");
		page5.add(buyBtn_3200);

		// priceNum_3200
		const priceNum_3200 = this.add.text(1217, 722, "", {});
		priceNum_3200.setOrigin(0.5, 0.5);
		priceNum_3200.text = "100";
		priceNum_3200.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page5.add(priceNum_3200);

		// nameTag_3200
		const nameTag_3200 = this.add.text(1212, 684, "", {});
		nameTag_3200.setOrigin(0.5, 0.5);
		nameTag_3200.text = "Explorer's Bag";
		nameTag_3200.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page5.add(nameTag_3200);

		// buyBtn_6218
		const buyBtn_6218 = this.add.sprite(968, 721, "jan22clothing", "buyBtn");
		page5.add(buyBtn_6218);

		// priceNum_6218
		const priceNum_6218 = this.add.text(982, 722, "", {});
		priceNum_6218.setOrigin(0.5, 0.5);
		priceNum_6218.text = "250";
		priceNum_6218.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page5.add(priceNum_6218);

		// nameTag_6218
		const nameTag_6218 = this.add.text(977, 684, "", {});
		nameTag_6218.setOrigin(0.5, 0.5);
		nameTag_6218.text = "Black Hiking Boots";
		nameTag_6218.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page5.add(nameTag_6218);

		// page4
		const page4 = this.add.container(0, 0);
		page4.visible = false;
		container.add(page4);

		// page4Bg
		const page4Bg = this.add.image(759, 480, "jan22clothing", "page0004");
		page4.add(page4Bg);

		// rollOverText
		const rollOverText = this.add.text(929, 637, "", {});
		rollOverText.setOrigin(0.5, 0.5);
		rollOverText.text = "Roll-over any of the\nimages above to preview";
		rollOverText.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "20px" });
		page4.add(rollOverText);

		// rollOver
		const rollOver = this.add.sprite(955, 440, "jan22clothing", "rollover10001");
		page4.add(rollOver);

		// page4_header
		const page4_header = this.add.text(204, 82, "", {});
		page4_header.setOrigin(0.5, 0.5);
		page4_header.text = "Clothing items\nfor everyone";
		page4_header.setStyle({ "fontFamily": "Burbank Small", "fontSize": "27px", "fontStyle": "bold italic" });
		page4.add(page4_header);

		// buyBtn_210
		const buyBtn_210 = this.add.sprite(999, 235, "jan22clothing", "buyBtn");
		page4.add(buyBtn_210);

		// priceNum_210
		const priceNum_210 = this.add.text(1013, 236, "", {});
		priceNum_210.setOrigin(0.5, 0.5);
		priceNum_210.text = "300";
		priceNum_210.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page4.add(priceNum_210);

		// nameTag_210
		const nameTag_210 = this.add.text(1008, 198, "", {});
		nameTag_210.setOrigin(0.5, 0.5);
		nameTag_210.text = "Star T-Shirt";
		nameTag_210.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page4.add(nameTag_210);

		// hover_210
		const hover_210 = this.add.rectangle(1004, 142, 128, 128);
		hover_210.fillAlpha = 0.5;
		page4.add(hover_210);

		// buyBtn_405
		const buyBtn_405 = this.add.sprite(1173, 235, "jan22clothing", "buyBtn");
		page4.add(buyBtn_405);

		// priceNum_405
		const priceNum_405 = this.add.text(1187, 236, "", {});
		priceNum_405.setOrigin(0.5, 0.5);
		priceNum_405.text = "200";
		priceNum_405.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page4.add(priceNum_405);

		// nameTag_405
		const nameTag_405 = this.add.text(1179, 198, "", {});
		nameTag_405.setOrigin(0.5, 0.5);
		nameTag_405.text = "Green Ball Cap";
		nameTag_405.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page4.add(nameTag_405);

		// hover_405
		const hover_405 = this.add.rectangle(1177, 142, 128, 128);
		hover_405.fillAlpha = 0.5;
		page4.add(hover_405);

		// buyBtn_717
		const buyBtn_717 = this.add.sprite(1344, 235, "jan22clothing", "buyBtn");
		page4.add(buyBtn_717);

		// priceNum_717
		const priceNum_717 = this.add.text(1358, 236, "", {});
		priceNum_717.setOrigin(0.5, 0.5);
		priceNum_717.text = "300";
		priceNum_717.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page4.add(priceNum_717);

		// nameTag_717
		const nameTag_717 = this.add.text(1351, 198, "", {});
		nameTag_717.setOrigin(0.5, 0.5);
		nameTag_717.text = "Baseball Glove";
		nameTag_717.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page4.add(nameTag_717);

		// hover_717
		const hover_717 = this.add.rectangle(1352, 144, 128, 128);
		hover_717.fillAlpha = 0.5;
		page4.add(hover_717);

		// buyBtn_713
		const buyBtn_713 = this.add.sprite(1344, 453, "jan22clothing", "buyBtn");
		page4.add(buyBtn_713);

		// priceNum_713
		const priceNum_713 = this.add.text(1358, 454, "", {});
		priceNum_713.setOrigin(0.5, 0.5);
		priceNum_713.text = "300";
		priceNum_713.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page4.add(priceNum_713);

		// nameTag_713
		const nameTag_713 = this.add.text(1351, 415, "", {});
		nameTag_713.setOrigin(0.5, 0.5);
		nameTag_713.text = "Pink Purse";
		nameTag_713.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page4.add(nameTag_713);

		// hover_713
		const hover_713 = this.add.rectangle(1349, 361, 128, 128);
		hover_713.fillAlpha = 0.5;
		page4.add(hover_713);

		// buyBtn_192
		const buyBtn_192 = this.add.sprite(1173, 453, "jan22clothing", "buyBtn");
		page4.add(buyBtn_192);

		// priceNum_192
		const priceNum_192 = this.add.text(1187, 454, "", {});
		priceNum_192.setOrigin(0.5, 0.5);
		priceNum_192.text = "150";
		priceNum_192.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page4.add(priceNum_192);

		// nameTag_192
		const nameTag_192 = this.add.text(1180, 415, "", {});
		nameTag_192.setOrigin(0.5, 0.5);
		nameTag_192.text = "Red Bandana";
		nameTag_192.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page4.add(nameTag_192);

		// hover_192
		const hover_192 = this.add.rectangle(1174, 359, 128, 128);
		hover_192.fillAlpha = 0.5;
		page4.add(hover_192);

		// buyBtn_203
		const buyBtn_203 = this.add.sprite(1337, 679, "jan22clothing", "buyBtn");
		page4.add(buyBtn_203);

		// priceNum_203
		const priceNum_203 = this.add.text(1352, 680, "", {});
		priceNum_203.setOrigin(0.5, 0.5);
		priceNum_203.text = "200";
		priceNum_203.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page4.add(priceNum_203);

		// nameTag_203
		const nameTag_203 = this.add.text(1347, 639, "", {});
		nameTag_203.setOrigin(0.5, 0.5);
		nameTag_203.text = "Butterfly T-Shirt";
		nameTag_203.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page4.add(nameTag_203);

		// hover_203
		const hover_203 = this.add.rectangle(1349, 582, 128, 128);
		hover_203.fillAlpha = 0.5;
		page4.add(hover_203);

		// buyBtn_653
		const buyBtn_653 = this.add.sprite(1173, 679, "jan22clothing", "buyBtn");
		page4.add(buyBtn_653);

		// priceNum_653
		const priceNum_653 = this.add.text(1187, 680, "", {});
		priceNum_653.setOrigin(0.5, 0.5);
		priceNum_653.text = "500";
		priceNum_653.setStyle({ "color": "#4b2500ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
		page4.add(priceNum_653);

		// nameTag_653
		const nameTag_653 = this.add.text(1180, 639, "", {});
		nameTag_653.setOrigin(0.5, 0.5);
		nameTag_653.text = "The Funster";
		nameTag_653.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });
		page4.add(nameTag_653);

		// hover_653
		const hover_653 = this.add.rectangle(1174, 580, 128, 128);
		hover_653.fillAlpha = 0.5;
		page4.add(hover_653);

		// secret_pixel_shades
		const secret_pixel_shades = this.add.rectangle(401, 313, 150, 150);
		secret_pixel_shades.angle = 30;
		secret_pixel_shades.fillColor = 2551787;
		secret_pixel_shades.fillAlpha = 0.5;
		page4.add(secret_pixel_shades);

		// page3
		const page3 = this.add.container(0, 0);
		page3.visible = false;
		container.add(page3);

		// page3Bg
		const page3Bg = this.add.image(760, 480, "jan22clothing", "page0003");
		page3.add(page3Bg);

		// page3_header1
		const page3_header1 = this.add.text(258, 78, "", {});
		page3_header1.setOrigin(0.5, 0.5);
		page3_header1.text = "Player Card Backgrounds\nfor everyone";
		page3_header1.setStyle({ "fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold italic" });
		page3.add(page3_header1);

		// cardBgPrice1
		const cardBgPrice1 = this.add.text(174, 142, "", {});
		cardBgPrice1.setOrigin(0.5, 0.5);
		cardBgPrice1.text = "60     each";
		cardBgPrice1.setStyle({ "color": "#9dc3fcff", "fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "italic" });
		page3.add(cardBgPrice1);

		// cardBgCoin1
		const cardBgCoin1 = this.add.image(160, 143, "jan22clothing", "coin");
		page3.add(cardBgCoin1);

		// page3_header2
		const page3_header2 = this.add.text(942, 84, "", {});
		page3_header2.setOrigin(0.5, 0.5);
		page3_header2.text = "Player Card Backgrounds\nfor everyone";
		page3_header2.setStyle({ "fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold italic" });
		page3.add(page3_header2);

		// cardBgPrice2
		const cardBgPrice2 = this.add.text(858, 148, "", {});
		cardBgPrice2.setOrigin(0.5, 0.5);
		cardBgPrice2.text = "60     each";
		cardBgPrice2.setStyle({ "color": "#9dc3fcff", "fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "italic" });
		page3.add(cardBgPrice2);

		// cardBgCoin2
		const cardBgCoin2 = this.add.image(844, 149, "jan22clothing", "coin");
		page3.add(cardBgCoin2);

		// hover_9258
		const hover_9258 = this.add.rectangle(305, 322, 225, 225);
		hover_9258.isFilled = true;
		hover_9258.fillAlpha = 0.01;
		page3.add(hover_9258);

		// hover_9259
		const hover_9259 = this.add.rectangle(544, 322, 225, 225);
		hover_9259.isFilled = true;
		hover_9259.fillAlpha = 0.01;
		page3.add(hover_9259);

		// hover_9254
		const hover_9254 = this.add.rectangle(980, 322, 225, 225);
		hover_9254.isFilled = true;
		hover_9254.fillAlpha = 0.01;
		page3.add(hover_9254);

		// hover_9253
		const hover_9253 = this.add.rectangle(1220, 322, 225, 225);
		hover_9253.isFilled = true;
		hover_9253.fillAlpha = 0.01;
		page3.add(hover_9253);

		// hover_9102
		const hover_9102 = this.add.rectangle(1220, 567, 225, 225);
		hover_9102.isFilled = true;
		hover_9102.fillAlpha = 0.01;
		page3.add(hover_9102);

		// hover_9014
		const hover_9014 = this.add.rectangle(980, 567, 225, 225);
		hover_9014.isFilled = true;
		hover_9014.fillAlpha = 0.01;
		page3.add(hover_9014);

		// hover_9059
		const hover_9059 = this.add.rectangle(544, 567, 225, 225);
		hover_9059.isFilled = true;
		hover_9059.fillAlpha = 0.01;
		page3.add(hover_9059);

		// hover_9086
		const hover_9086 = this.add.rectangle(305, 567, 225, 225);
		hover_9086.isFilled = true;
		hover_9086.fillAlpha = 0.01;
		page3.add(hover_9086);

		// page2
		const page2 = this.add.container(0, 0);
		page2.visible = false;
		container.add(page2);

		// page2Bg
		const page2Bg = this.add.image(760, 480, "jan22clothing", "page0002");
		page2.add(page2Bg);

		// page2_header
		const page2_header = this.add.text(189, 79, "", {});
		page2_header.setOrigin(0.5, 0.5);
		page2_header.text = "Colors for\neveryone!";
		page2_header.setStyle({ "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold italic" });
		page2.add(page2_header);

		// colorsPrice
		const colorsPrice = this.add.text(215, 141, "", {});
		colorsPrice.setOrigin(0.5, 0.5);
		colorsPrice.text = "Only 20     each!";
		colorsPrice.setStyle({ "color": "#9dc3fcff", "fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "italic" });
		page2.add(colorsPrice);

		// coinPng
		const coinPng = this.add.image(229, 140, "jan22clothing", "coin");
		page2.add(coinPng);

		// blueHover
		const blueHover = this.add.ellipse(299, 253, 93, 93);
		blueHover.lineWidth = 5;
		page2.add(blueHover);

		// greenHover
		const greenHover = this.add.ellipse(425, 253, 93, 93);
		greenHover.lineWidth = 5;
		page2.add(greenHover);

		// pinkHover
		const pinkHover = this.add.ellipse(551, 253, 93, 93);
		pinkHover.lineWidth = 5;
		page2.add(pinkHover);

		// peachHover
		const peachHover = this.add.ellipse(552, 368, 93, 93);
		peachHover.lineWidth = 5;
		page2.add(peachHover);

		// brownHover
		const brownHover = this.add.ellipse(425, 368, 93, 93);
		brownHover.lineWidth = 5;
		page2.add(brownHover);

		// purpleHover
		const purpleHover = this.add.ellipse(298, 368, 93, 93);
		purpleHover.lineWidth = 5;
		page2.add(purpleHover);

		// lightBlueHover
		const lightBlueHover = this.add.ellipse(299, 484, 93, 93);
		lightBlueHover.lineWidth = 5;
		page2.add(lightBlueHover);

		// redHover
		const redHover = this.add.ellipse(299, 599, 93, 93);
		redHover.lineWidth = 5;
		page2.add(redHover);

		// orangeHover
		const orangeHover = this.add.ellipse(425, 599, 93, 93);
		orangeHover.lineWidth = 5;
		page2.add(orangeHover);

		// limeHover
		const limeHover = this.add.ellipse(425, 484, 93, 93);
		limeHover.lineWidth = 5;
		page2.add(limeHover);

		// cyanHover
		const cyanHover = this.add.ellipse(553, 484, 93, 93);
		cyanHover.lineWidth = 5;
		page2.add(cyanHover);

		// yellowHover
		const yellowHover = this.add.ellipse(552, 599, 93, 93);
		yellowHover.lineWidth = 5;
		page2.add(yellowHover);

		// whiteHover
		const whiteHover = this.add.ellipse(552, 714, 93, 93);
		whiteHover.lineWidth = 5;
		page2.add(whiteHover);

		// blackHover
		const blackHover = this.add.ellipse(299, 714, 93, 93);
		blackHover.lineWidth = 5;
		page2.add(blackHover);

		// darkGreenHover
		const darkGreenHover = this.add.ellipse(425, 714, 93, 93);
		darkGreenHover.lineWidth = 5;
		page2.add(darkGreenHover);

		// secret_bucket_hat
		const secret_bucket_hat = this.add.rectangle(1139, 189, 150, 150);
		secret_bucket_hat.angle = 30;
		secret_bucket_hat.fillColor = 2551787;
		secret_bucket_hat.fillAlpha = 0.5;
		page2.add(secret_bucket_hat);

		// page1
		const page1 = this.add.container(0, 0);
		page1.visible = false;
		container.add(page1);

		// page1Bg
		const page1Bg = this.add.image(760, 480, "jan22clothing", "page0001");
		page1.add(page1Bg);

		// titleText
		const titleText = this.add.text(785, 98, "", {});
		titleText.setOrigin(0.5, 0.5);
		titleText.text = "Penguin Style";
		titleText.setStyle({ "fontFamily": "Burbank Small", "fontSize": "80px", "fontStyle": "bold italic" });
		page1.add(titleText);

		// monthText
		const monthText = this.add.text(833, 158, "", {});
		monthText.setOrigin(0.5, 0.5);
		monthText.text = "February - March 2022";
		monthText.setStyle({ "fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "italic" });
		page1.add(monthText);

		// page2_go
		const page2_go = this.add.rectangle(1107, 758, 75, 200);
		page2_go.angle = 30;
		page2_go.fillColor = 2551787;
		page2_go.fillAlpha = 0.5;
		page1.add(page2_go);

		// closeBtn_1
		const closeBtn_1 = this.add.ellipse(1124, 39, 50, 50);
		closeBtn_1.fillColor = 2551787;
		closeBtn_1.fillAlpha = 0.5;
		page1.add(closeBtn_1);

		// buttons
		const buttons = this.add.container(0, 0);
		buttons.visible = false;
		container.add(buttons);

		// closeBtn_2
		const closeBtn_2 = this.add.ellipse(1440, 37, 50, 50);
		closeBtn_2.fillColor = 2551787;
		closeBtn_2.fillAlpha = 0.5;
		buttons.add(closeBtn_2);

		// coins
		const coins = this.add.text(885, 886, "", {});
		coins.angle = -8;
		coins.setOrigin(0.5, 0.5);
		coins.text = "Your Coins:\nundefined";
		coins.setStyle({ "align": "center", "color": "#733c03ff", "fixedWidth":185,"fixedHeight":100,"fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold" });
		coins.setPadding({"left":1,"top":15});
		buttons.add(coins);

		// nextPage
		const nextPage = this.add.rectangle(1434, 746, 75, 200);
		nextPage.angle = 30;
		nextPage.fillColor = 2551787;
		nextPage.fillAlpha = 0.5;
		buttons.add(nextPage);

		// prevPage
		const prevPage = this.add.rectangle(98, 760, 75, 200);
		prevPage.angle = -30;
		prevPage.fillColor = 2551787;
		prevPage.fillAlpha = 0.5;
		buttons.add(prevPage);

		// lists
		const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page19, page20];

		// blocker (components)
		new Interactive(blocker);

		// closeBtn_3 (components)
		const closeBtn_3SimpleButton = new SimpleButton(closeBtn_3);
		closeBtn_3SimpleButton.callback = () => super.close();

		// lastPagebtn (components)
		const lastPagebtnSimpleButton = new SimpleButton(lastPagebtn);
		lastPagebtnSimpleButton.callback = () => super.prevPage();

		// flag_name_7186 (components)
		const flag_name_7186Name = new Name(flag_name_7186);
		flag_name_7186Name.id = 7186;

		// flag_name_7187 (components)
		const flag_name_7187Name = new Name(flag_name_7187);
		flag_name_7187Name.id = 7187;

		// flag_name_7188 (components)
		const flag_name_7188Name = new Name(flag_name_7188);
		flag_name_7188Name.id = 7188;

		// flag_name_7189 (components)
		const flag_name_7189Name = new Name(flag_name_7189);
		flag_name_7189Name.id = 7189;

		// flag_name_7185 (components)
		const flag_name_7185Name = new Name(flag_name_7185);
		flag_name_7185Name.id = 7185;

		// flag_name_7184 (components)
		const flag_name_7184Name = new Name(flag_name_7184);
		flag_name_7184Name.id = 7184;

		// flag_name_7183 (components)
		const flag_name_7183Name = new Name(flag_name_7183);
		flag_name_7183Name.id = 7183;

		// flag_name_7182 (components)
		const flag_name_7182Name = new Name(flag_name_7182);
		flag_name_7182Name.id = 7182;

		// flag_name_7148 (components)
		const flag_name_7148Name = new Name(flag_name_7148);
		flag_name_7148Name.id = 7148;

		// flag_name_504 (components)
		const flag_name_504Name = new Name(flag_name_504);
		flag_name_504Name.id = 504;

		// flag_name_7096 (components)
		const flag_name_7096Name = new Name(flag_name_7096);
		flag_name_7096Name.id = 7096;

		// flag_name_502 (components)
		const flag_name_502Name = new Name(flag_name_502);
		flag_name_502Name.id = 502;

		// flag_name_533 (components)
		const flag_name_533Name = new Name(flag_name_533);
		flag_name_533Name.id = 533;

		// flag_name_514 (components)
		const flag_name_514Name = new Name(flag_name_514);
		flag_name_514Name.id = 514;

		// flag_name_535 (components)
		const flag_name_535Name = new Name(flag_name_535);
		flag_name_535Name.id = 535;

		// flag_name_500 (components)
		const flag_name_500Name = new Name(flag_name_500);
		flag_name_500Name.id = 500;

		// flag_name_505 (components)
		const flag_name_505Name = new Name(flag_name_505);
		flag_name_505Name.id = 505;

		// flag_name_529 (components)
		const flag_name_529Name = new Name(flag_name_529);
		flag_name_529Name.id = 529;

		// flag_name_538 (components)
		const flag_name_538Name = new Name(flag_name_538);
		flag_name_538Name.id = 538;

		// flag_name_507 (components)
		const flag_name_507Name = new Name(flag_name_507);
		flag_name_507Name.id = 507;

		// flag_name_540 (components)
		const flag_name_540Name = new Name(flag_name_540);
		flag_name_540Name.id = 540;

		// flag_name_536 (components)
		const flag_name_536Name = new Name(flag_name_536);
		flag_name_536Name.id = 536;

		// flag_name_506 (components)
		const flag_name_506Name = new Name(flag_name_506);
		flag_name_506Name.id = 506;

		// flag_name_525 (components)
		const flag_name_525Name = new Name(flag_name_525);
		flag_name_525Name.id = 525;

		// flag_name_508 (components)
		const flag_name_508Name = new Name(flag_name_508);
		flag_name_508Name.id = 508;

		// flag_name_530 (components)
		const flag_name_530Name = new Name(flag_name_530);
		flag_name_530Name.id = 530;

		// flag_name_548 (components)
		const flag_name_548Name = new Name(flag_name_548);
		flag_name_548Name.id = 548;

		// flag_name_546 (components)
		const flag_name_546Name = new Name(flag_name_546);
		flag_name_546Name.id = 546;

		// flag_name_542 (components)
		const flag_name_542Name = new Name(flag_name_542);
		flag_name_542Name.id = 542;

		// flag_name_537 (components)
		const flag_name_537Name = new Name(flag_name_537);
		flag_name_537Name.id = 537;

		// flag_name_517 (components)
		const flag_name_517Name = new Name(flag_name_517);
		flag_name_517Name.id = 517;

		// flag_name_526 (components)
		const flag_name_526Name = new Name(flag_name_526);
		flag_name_526Name.id = 526;

		// flag_name_518 (components)
		const flag_name_518Name = new Name(flag_name_518);
		flag_name_518Name.id = 518;

		// flag_name_539 (components)
		const flag_name_539Name = new Name(flag_name_539);
		flag_name_539Name.id = 539;

		// flag_name_513 (components)
		const flag_name_513Name = new Name(flag_name_513);
		flag_name_513Name.id = 513;

		// flag_name_7095 (components)
		const flag_name_7095Name = new Name(flag_name_7095);
		flag_name_7095Name.id = 7085;

		// flag_name_543 (components)
		const flag_name_543Name = new Name(flag_name_543);
		flag_name_543Name.id = 543;

		// flag_name_522 (components)
		const flag_name_522Name = new Name(flag_name_522);
		flag_name_522Name.id = 522;

		// flag_name_547 (components)
		const flag_name_547Name = new Name(flag_name_547);
		flag_name_547Name.id = 547;

		// flag_name_511 (components)
		const flag_name_511Name = new Name(flag_name_511);
		flag_name_511Name.id = 511;

		// flag_name_528 (components)
		const flag_name_528Name = new Name(flag_name_528);
		flag_name_528Name.id = 528;

		// flag_name_534 (components)
		const flag_name_534Name = new Name(flag_name_534);
		flag_name_534Name.id = 534;

		// flag_name_512 (components)
		const flag_name_512Name = new Name(flag_name_512);
		flag_name_512Name.id = 512;

		// flag_name_520 (components)
		const flag_name_520Name = new Name(flag_name_520);
		flag_name_520Name.id = 520;

		// flag_name_545 (components)
		const flag_name_545Name = new Name(flag_name_545);
		flag_name_545Name.id = 545;

		// flag_name_531 (components)
		const flag_name_531Name = new Name(flag_name_531);
		flag_name_531Name.id = 531;

		// flag_name_527 (components)
		const flag_name_527Name = new Name(flag_name_527);
		flag_name_527Name.id = 527;

		// flag_name_524 (components)
		const flag_name_524Name = new Name(flag_name_524);
		flag_name_524Name.id = 524;

		// flag_name_501 (components)
		const flag_name_501Name = new Name(flag_name_501);
		flag_name_501Name.id = 501;

		// flag_name_519 (components)
		const flag_name_519Name = new Name(flag_name_519);
		flag_name_519Name.id = 519;

		// flag_name_541 (components)
		const flag_name_541Name = new Name(flag_name_541);
		flag_name_541Name.id = 541;

		// flag_name_503 (components)
		const flag_name_503Name = new Name(flag_name_503);
		flag_name_503Name.id = 503;

		// flag_name_510 (components)
		const flag_name_510Name = new Name(flag_name_510);
		flag_name_510Name.id = 510;

		// flag_name_509 (components)
		const flag_name_509Name = new Name(flag_name_509);
		flag_name_509Name.id = 509;

		// flag_name_521 (components)
		const flag_name_521Name = new Name(flag_name_521);
		flag_name_521Name.id = 521;

		// flag_name_516 (components)
		const flag_name_516Name = new Name(flag_name_516);
		flag_name_516Name.id = 516;

		// flag_name_544 (components)
		const flag_name_544Name = new Name(flag_name_544);
		flag_name_544Name.id = 544;

		// flag_name_515 (components)
		const flag_name_515Name = new Name(flag_name_515);
		flag_name_515Name.id = 515;

		// flag_name_523 (components)
		const flag_name_523Name = new Name(flag_name_523);
		flag_name_523Name.id = 523;

		// flag_button_7186 (components)
		const flag_button_7186SimpleButton = new SimpleButton(flag_button_7186);
		flag_button_7186SimpleButton.callback = () => this.buy(7186);

		// flag_button_7187 (components)
		const flag_button_7187SimpleButton = new SimpleButton(flag_button_7187);
		flag_button_7187SimpleButton.callback = () => this.buy(7187);

		// flag_button_7188 (components)
		const flag_button_7188SimpleButton = new SimpleButton(flag_button_7188);
		flag_button_7188SimpleButton.callback = () => this.buy(7188);

		// flag_button_7189 (components)
		const flag_button_7189SimpleButton = new SimpleButton(flag_button_7189);
		flag_button_7189SimpleButton.callback = () => this.buy(7189);

		// flag_button_7148 (components)
		const flag_button_7148SimpleButton = new SimpleButton(flag_button_7148);
		flag_button_7148SimpleButton.callback = () => this.buy(7148);

		// flag_button_7182 (components)
		const flag_button_7182SimpleButton = new SimpleButton(flag_button_7182);
		flag_button_7182SimpleButton.callback = () => this.buy(7182);

		// flag_button_7183 (components)
		const flag_button_7183SimpleButton = new SimpleButton(flag_button_7183);
		flag_button_7183SimpleButton.callback = () => this.buy(7183);

		// flag_button_7184 (components)
		const flag_button_7184SimpleButton = new SimpleButton(flag_button_7184);
		flag_button_7184SimpleButton.callback = () => this.buy(7184);

		// flag_button_7185 (components)
		const flag_button_7185SimpleButton = new SimpleButton(flag_button_7185);
		flag_button_7185SimpleButton.callback = () => this.buy(7185);

		// flag_button_514 (components)
		const flag_button_514SimpleButton = new SimpleButton(flag_button_514);
		flag_button_514SimpleButton.callback = () => this.buy(514);

		// flag_button_533 (components)
		const flag_button_533SimpleButton = new SimpleButton(flag_button_533);
		flag_button_533SimpleButton.callback = () => this.buy(533);

		// flag_button_502 (components)
		const flag_button_502SimpleButton = new SimpleButton(flag_button_502);
		flag_button_502SimpleButton.callback = () => this.buy(502);

		// flag_button_7096 (components)
		const flag_button_7096SimpleButton = new SimpleButton(flag_button_7096);
		flag_button_7096SimpleButton.callback = () => this.buy(7096);

		// flag_button_504 (components)
		const flag_button_504SimpleButton = new SimpleButton(flag_button_504);
		flag_button_504SimpleButton.callback = () => this.buy(504);

		// flag_button_500 (components)
		const flag_button_500SimpleButton = new SimpleButton(flag_button_500);
		flag_button_500SimpleButton.callback = () => this.buy(500);

		// flag_button_535 (components)
		const flag_button_535SimpleButton = new SimpleButton(flag_button_535);
		flag_button_535SimpleButton.callback = () => this.buy(535);

		// flag_button_505 (components)
		const flag_button_505SimpleButton = new SimpleButton(flag_button_505);
		flag_button_505SimpleButton.callback = () => this.buy(505);

		// flag_button_529 (components)
		const flag_button_529SimpleButton = new SimpleButton(flag_button_529);
		flag_button_529SimpleButton.callback = () => this.buy(529);

		// flag_button_538 (components)
		const flag_button_538SimpleButton = new SimpleButton(flag_button_538);
		flag_button_538SimpleButton.callback = () => this.buy(538);

		// flag_button_507 (components)
		const flag_button_507SimpleButton = new SimpleButton(flag_button_507);
		flag_button_507SimpleButton.callback = () => this.buy(507);

		// flag_button_536 (components)
		const flag_button_536SimpleButton = new SimpleButton(flag_button_536);
		flag_button_536SimpleButton.callback = () => this.buy(536);

		// flag_button_506 (components)
		const flag_button_506SimpleButton = new SimpleButton(flag_button_506);
		flag_button_506SimpleButton.callback = () => this.buy(506);

		// flag_button_525 (components)
		const flag_button_525SimpleButton = new SimpleButton(flag_button_525);
		flag_button_525SimpleButton.callback = () => this.buy(525);

		// flag_button_530 (components)
		const flag_button_530SimpleButton = new SimpleButton(flag_button_530);
		flag_button_530SimpleButton.callback = () => this.buy(530);

		// flag_button_508 (components)
		const flag_button_508SimpleButton = new SimpleButton(flag_button_508);
		flag_button_508SimpleButton.callback = () => this.buy(508);

		// flag_button_548 (components)
		const flag_button_548SimpleButton = new SimpleButton(flag_button_548);
		flag_button_548SimpleButton.callback = () => this.buy(548);

		// flag_button_546 (components)
		const flag_button_546SimpleButton = new SimpleButton(flag_button_546);
		flag_button_546SimpleButton.callback = () => this.buy(546);

		// flag_button_542 (components)
		const flag_button_542SimpleButton = new SimpleButton(flag_button_542);
		flag_button_542SimpleButton.callback = () => this.buy(542);

		// flag_button_537 (components)
		const flag_button_537SimpleButton = new SimpleButton(flag_button_537);
		flag_button_537SimpleButton.callback = () => this.buy(537);

		// flag_button_517 (components)
		const flag_button_517SimpleButton = new SimpleButton(flag_button_517);
		flag_button_517SimpleButton.callback = () => this.buy(517);

		// flag_button_526 (components)
		const flag_button_526SimpleButton = new SimpleButton(flag_button_526);
		flag_button_526SimpleButton.callback = () => this.buy(526);

		// flag_button_539 (components)
		const flag_button_539SimpleButton = new SimpleButton(flag_button_539);
		flag_button_539SimpleButton.callback = () => this.buy(539);

		// flag_button_518 (components)
		const flag_button_518SimpleButton = new SimpleButton(flag_button_518);
		flag_button_518SimpleButton.callback = () => this.buy(518);

		// flag_button_513 (components)
		const flag_button_513SimpleButton = new SimpleButton(flag_button_513);
		flag_button_513SimpleButton.callback = () => this.buy(513);

		// flag_button_7095 (components)
		const flag_button_7095SimpleButton = new SimpleButton(flag_button_7095);
		flag_button_7095SimpleButton.callback = () => this.buy(7095);

		// flag_button_543 (components)
		const flag_button_543SimpleButton = new SimpleButton(flag_button_543);
		flag_button_543SimpleButton.callback = () => this.buy(543);

		// flag_button_547 (components)
		const flag_button_547SimpleButton = new SimpleButton(flag_button_547);
		flag_button_547SimpleButton.callback = () => this.buy(547);

		// flag_button_522 (components)
		const flag_button_522SimpleButton = new SimpleButton(flag_button_522);
		flag_button_522SimpleButton.callback = () => this.buy(522);

		// flag_button_511 (components)
		const flag_button_511SimpleButton = new SimpleButton(flag_button_511);
		flag_button_511SimpleButton.callback = () => this.buy(511);

		// flag_button_528 (components)
		const flag_button_528SimpleButton = new SimpleButton(flag_button_528);
		flag_button_528SimpleButton.callback = () => this.buy(528);

		// flag_button_534 (components)
		const flag_button_534SimpleButton = new SimpleButton(flag_button_534);
		flag_button_534SimpleButton.callback = () => this.buy(534);

		// flag_button_520 (components)
		const flag_button_520SimpleButton = new SimpleButton(flag_button_520);
		flag_button_520SimpleButton.callback = () => this.buy(520);

		// flag_button_512 (components)
		const flag_button_512SimpleButton = new SimpleButton(flag_button_512);
		flag_button_512SimpleButton.callback = () => this.buy(512);

		// flag_button_501 (components)
		const flag_button_501SimpleButton = new SimpleButton(flag_button_501);
		flag_button_501SimpleButton.callback = () => this.buy(501);

		// flag_button_524 (components)
		const flag_button_524SimpleButton = new SimpleButton(flag_button_524);
		flag_button_524SimpleButton.callback = () => this.buy(524);

		// flag_button_527 (components)
		const flag_button_527SimpleButton = new SimpleButton(flag_button_527);
		flag_button_527SimpleButton.callback = () => this.buy(527);

		// flag_button_531 (components)
		const flag_button_531SimpleButton = new SimpleButton(flag_button_531);
		flag_button_531SimpleButton.callback = () => this.buy(531);

		// flag_button_545 (components)
		const flag_button_545SimpleButton = new SimpleButton(flag_button_545);
		flag_button_545SimpleButton.callback = () => this.buy(545);

		// flag_button_509 (components)
		const flag_button_509SimpleButton = new SimpleButton(flag_button_509);
		flag_button_509SimpleButton.callback = () => this.buy(509);

		// flag_button_510 (components)
		const flag_button_510SimpleButton = new SimpleButton(flag_button_510);
		flag_button_510SimpleButton.callback = () => this.buy(510);

		// flag_button_503 (components)
		const flag_button_503SimpleButton = new SimpleButton(flag_button_503);
		flag_button_503SimpleButton.callback = () => this.buy(503);

		// flag_button_541 (components)
		const flag_button_541SimpleButton = new SimpleButton(flag_button_541);
		flag_button_541SimpleButton.callback = () => this.buy(541);

		// flag_button_519 (components)
		const flag_button_519SimpleButton = new SimpleButton(flag_button_519);
		flag_button_519SimpleButton.callback = () => this.buy(519);

		// flag_button_521 (components)
		const flag_button_521SimpleButton = new SimpleButton(flag_button_521);
		flag_button_521SimpleButton.callback = () => this.buy(521);

		// flag_button_516 (components)
		const flag_button_516SimpleButton = new SimpleButton(flag_button_516);
		flag_button_516SimpleButton.callback = () => this.buy(516);

		// flag_button_544 (components)
		const flag_button_544SimpleButton = new SimpleButton(flag_button_544);
		flag_button_544SimpleButton.callback = () => this.buy(544);

		// flag_button_515 (components)
		const flag_button_515SimpleButton = new SimpleButton(flag_button_515);
		flag_button_515SimpleButton.callback = () => this.buy(515);

		// flag_button_523 (components)
		const flag_button_523SimpleButton = new SimpleButton(flag_button_523);
		flag_button_523SimpleButton.callback = () => this.buy(523);

		// flag_button_540 (components)
		const flag_button_540SimpleButton = new SimpleButton(flag_button_540);
		flag_button_540SimpleButton.callback = () => this.buy(540);

		// buyBtn_1259 (components)
		const buyBtn_1259Button = new Button(buyBtn_1259);
		buyBtn_1259Button.spriteName = "buyBtn";
		buyBtn_1259Button.callback = () => this.buy(1259);
		buyBtn_1259Button.activeFrame = false;

		// priceNum_1259 (components)
		const priceNum_1259Pricetag = new Pricetag(priceNum_1259);
		priceNum_1259Pricetag.id = 1259;

		// nameTag_1259 (components)
		const nameTag_1259Name = new Name(nameTag_1259);
		nameTag_1259Name.id = 259;

		// buyBtn_322 (components)
		const buyBtn_322Button = new Button(buyBtn_322);
		buyBtn_322Button.spriteName = "buyBtn";
		buyBtn_322Button.callback = () => this.buy(322);
		buyBtn_322Button.activeFrame = false;

		// priceNum_322 (components)
		const priceNum_322Pricetag = new Pricetag(priceNum_322);
		priceNum_322Pricetag.id = 322;

		// nameTag_322 (components)
		const nameTag_322Name = new Name(nameTag_322);
		nameTag_322Name.id = 322;

		// buyBtn_6101 (components)
		const buyBtn_6101Button = new Button(buyBtn_6101);
		buyBtn_6101Button.spriteName = "buyBtn";
		buyBtn_6101Button.callback = () => this.buy(6101);
		buyBtn_6101Button.activeFrame = false;

		// priceNum_6101 (components)
		const priceNum_6101Pricetag = new Pricetag(priceNum_6101);
		priceNum_6101Pricetag.id = 6101;

		// nameTag_6101 (components)
		const nameTag_6101Name = new Name(nameTag_6101);
		nameTag_6101Name.id = 6101;

		// buyBtn_4369 (components)
		const buyBtn_4369Button = new Button(buyBtn_4369);
		buyBtn_4369Button.spriteName = "buyBtn";
		buyBtn_4369Button.callback = () => this.buy(4369);
		buyBtn_4369Button.activeFrame = false;

		// priceNum_4369 (components)
		const priceNum_4369Pricetag = new Pricetag(priceNum_4369);
		priceNum_4369Pricetag.id = 4369;

		// nameTag_4369 (components)
		const nameTag_4369Name = new Name(nameTag_4369);
		nameTag_4369Name.id = 4369;

		// secret_boombox (components)
		const secret_boomboxSimpleButton = new SimpleButton(secret_boombox);
		secret_boomboxSimpleButton.callback = () => this.buy(5016);

		// nameTag_3198 (components)
		const nameTag_3198Name = new Name(nameTag_3198);
		nameTag_3198Name.id = 3198;

		// buyBtn_3198 (components)
		const buyBtn_3198Button = new Button(buyBtn_3198);
		buyBtn_3198Button.spriteName = "buyBtn";
		buyBtn_3198Button.callback = () => this.buy(3198);
		buyBtn_3198Button.activeFrame = false;

		// priceNum_3198 (components)
		const priceNum_3198Pricetag = new Pricetag(priceNum_3198);
		priceNum_3198Pricetag.id = 3198;

		// nameTag_5424 (components)
		const nameTag_5424Name = new Name(nameTag_5424);
		nameTag_5424Name.id = 5424;

		// buyBtn_5424 (components)
		const buyBtn_5424Button = new Button(buyBtn_5424);
		buyBtn_5424Button.spriteName = "buyBtn";
		buyBtn_5424Button.callback = () => this.buy(5424);
		buyBtn_5424Button.activeFrame = false;

		// priceNum_5424 (components)
		const priceNum_5424Pricetag = new Pricetag(priceNum_5424);
		priceNum_5424Pricetag.id = 5424;

		// nameTag_24044 (components)
		const nameTag_24044Name = new Name(nameTag_24044);
		nameTag_24044Name.id = 24044;

		// buyBtn_24044 (components)
		const buyBtn_24044Button = new Button(buyBtn_24044);
		buyBtn_24044Button.spriteName = "buyBtn";
		buyBtn_24044Button.callback = () => this.buy(24044);
		buyBtn_24044Button.activeFrame = false;

		// priceNum_24044 (components)
		const priceNum_24044Pricetag = new Pricetag(priceNum_24044);
		priceNum_24044Pricetag.id = 24044;

		// nameTag_24043 (components)
		const nameTag_24043Name = new Name(nameTag_24043);
		nameTag_24043Name.id = 24043;

		// buyBtn_24043 (components)
		const buyBtn_24043Button = new Button(buyBtn_24043);
		buyBtn_24043Button.spriteName = "buyBtn";
		buyBtn_24043Button.callback = () => this.buy(24043);
		buyBtn_24043Button.activeFrame = false;

		// priceNum_24043 (components)
		const priceNum_24043Pricetag = new Pricetag(priceNum_24043);
		priceNum_24043Pricetag.id = 24043;

		// nameTag_1785 (components)
		const nameTag_1785Name = new Name(nameTag_1785);
		nameTag_1785Name.id = 1786;

		// buyBtn_1785 (components)
		const buyBtn_1785Button = new Button(buyBtn_1785);
		buyBtn_1785Button.spriteName = "buyBtn";
		buyBtn_1785Button.callback = () => this.buy(1785);
		buyBtn_1785Button.activeFrame = false;

		// priceNum_1785 (components)
		const priceNum_1785Pricetag = new Pricetag(priceNum_1785);
		priceNum_1785Pricetag.id = 1785;

		// nameTag_1786 (components)
		const nameTag_1786Name = new Name(nameTag_1786);
		nameTag_1786Name.id = 1786;

		// buyBtn_1786 (components)
		const buyBtn_1786Button = new Button(buyBtn_1786);
		buyBtn_1786Button.spriteName = "buyBtn";
		buyBtn_1786Button.callback = () => this.buy(1786);
		buyBtn_1786Button.activeFrame = false;

		// priceNum_1786 (components)
		const priceNum_1786Pricetag = new Pricetag(priceNum_1786);
		priceNum_1786Pricetag.id = 1786;

		// secret_hawaiian_lei (components)
		const secret_hawaiian_leiSimpleButton = new SimpleButton(secret_hawaiian_lei);
		secret_hawaiian_leiSimpleButton.callback = () => this.buy(171);

		// nameTag_384 (components)
		const nameTag_384Name = new Name(nameTag_384);
		nameTag_384Name.id = 384;

		// buyBtn_384 (components)
		const buyBtn_384Button = new Button(buyBtn_384);
		buyBtn_384Button.spriteName = "buyBtn";
		buyBtn_384Button.callback = () => this.buy(384);
		buyBtn_384Button.activeFrame = false;

		// priceNum_384 (components)
		const priceNum_384Pricetag = new Pricetag(priceNum_384);
		priceNum_384Pricetag.id = 384;

		// nameTag_6140 (components)
		const nameTag_6140Name = new Name(nameTag_6140);
		nameTag_6140Name.id = 6140;

		// buyBtn_6140 (components)
		const buyBtn_6140Button = new Button(buyBtn_6140);
		buyBtn_6140Button.spriteName = "buyBtn";
		buyBtn_6140Button.callback = () => this.buy(6140);
		buyBtn_6140Button.activeFrame = false;

		// priceNum_6140 (components)
		const priceNum_6140Pricetag = new Pricetag(priceNum_6140);
		priceNum_6140Pricetag.id = 6140;

		// nameTag_4235 (components)
		const nameTag_4235Name = new Name(nameTag_4235);
		nameTag_4235Name.id = 4235;

		// buyBtn_4235 (components)
		const buyBtn_4235Button = new Button(buyBtn_4235);
		buyBtn_4235Button.spriteName = "buyBtn";
		buyBtn_4235Button.callback = () => this.buy(4235);
		buyBtn_4235Button.activeFrame = false;

		// priceNum_4235 (components)
		const priceNum_4235Pricetag = new Pricetag(priceNum_4235);
		priceNum_4235Pricetag.id = 4235;

		// nameTag_4316 (components)
		const nameTag_4316Name = new Name(nameTag_4316);
		nameTag_4316Name.id = 4316;

		// buyBtn_4316 (components)
		const buyBtn_4316Button = new Button(buyBtn_4316);
		buyBtn_4316Button.spriteName = "buyBtn";
		buyBtn_4316Button.callback = () => this.buy(4316);
		buyBtn_4316Button.activeFrame = false;

		// priceNum_4316 (components)
		const priceNum_4316Pricetag = new Pricetag(priceNum_4316);
		priceNum_4316Pricetag.id = 4316;

		// nameTag_1195 (components)
		const nameTag_1195Name = new Name(nameTag_1195);
		nameTag_1195Name.id = 1195;

		// buyBtn_1195 (components)
		const buyBtn_1195Button = new Button(buyBtn_1195);
		buyBtn_1195Button.spriteName = "buyBtn";
		buyBtn_1195Button.callback = () => this.buy(1195);
		buyBtn_1195Button.activeFrame = false;

		// priceNum_1195 (components)
		const priceNum_1195Pricetag = new Pricetag(priceNum_1195);
		priceNum_1195Pricetag.id = 1195;

		// nameTag_1525 (components)
		const nameTag_1525Name = new Name(nameTag_1525);
		nameTag_1525Name.id = 1525;

		// buyBtn_1525 (components)
		const buyBtn_1525Button = new Button(buyBtn_1525);
		buyBtn_1525Button.spriteName = "buyBtn";
		buyBtn_1525Button.callback = () => this.buy(1525);
		buyBtn_1525Button.activeFrame = false;

		// priceNum_1525 (components)
		const priceNum_1525Pricetag = new Pricetag(priceNum_1525);
		priceNum_1525Pricetag.id = 1525;

		// secret_3d_glasses (components)
		const secret_3d_glassesSimpleButton = new SimpleButton(secret_3d_glasses);
		secret_3d_glassesSimpleButton.callback = () => this.buy(103);

		// buyBtn_1835 (components)
		const buyBtn_1835Button = new Button(buyBtn_1835);
		buyBtn_1835Button.spriteName = "buyBtn";
		buyBtn_1835Button.callback = () => this.buy(1835);
		buyBtn_1835Button.activeFrame = false;

		// priceNum_1835 (components)
		const priceNum_1835Pricetag = new Pricetag(priceNum_1835);
		priceNum_1835Pricetag.id = 1835;

		// nameTag_1835 (components)
		const nameTag_1835Name = new Name(nameTag_1835);
		nameTag_1835Name.id = 1835;

		// buyBtn_5133 (components)
		const buyBtn_5133Button = new Button(buyBtn_5133);
		buyBtn_5133Button.spriteName = "buyBtn";
		buyBtn_5133Button.callback = () => this.buy(5133);
		buyBtn_5133Button.activeFrame = false;

		// priceNum_5133 (components)
		const priceNum_5133Pricetag = new Pricetag(priceNum_5133);
		priceNum_5133Pricetag.id = 5133;

		// nameTag_5133 (components)
		const nameTag_5133Name = new Name(nameTag_5133);
		nameTag_5133Name.id = 5133;

		// buyBtn_4638 (components)
		const buyBtn_4638Button = new Button(buyBtn_4638);
		buyBtn_4638Button.spriteName = "buyBtn";
		buyBtn_4638Button.callback = () => this.buy(4638);
		buyBtn_4638Button.activeFrame = false;

		// priceNum_4638 (components)
		const priceNum_4638Pricetag = new Pricetag(priceNum_4638);
		priceNum_4638Pricetag.id = 4638;

		// nameTag_4638 (components)
		const nameTag_4638Name = new Name(nameTag_4638);
		nameTag_4638Name.id = 4638;

		// buyBtn_6074 (components)
		const buyBtn_6074Button = new Button(buyBtn_6074);
		buyBtn_6074Button.spriteName = "buyBtn";
		buyBtn_6074Button.callback = () => this.buy(6074);
		buyBtn_6074Button.activeFrame = false;

		// priceNum_6074 (components)
		const priceNum_6074Pricetag = new Pricetag(priceNum_6074);
		priceNum_6074Pricetag.id = 6074;

		// nameTag_6074 (components)
		const nameTag_6074Name = new Name(nameTag_6074);
		nameTag_6074Name.id = 6074;

		// customHoodie (components)
		const customHoodieSimpleButton = new SimpleButton(customHoodie);
		customHoodieSimpleButton.callback = () => this.buyHoodie();

		// hoodie_black (components)
		const hoodie_blackSimpleButton = new SimpleButton(hoodie_black);
		hoodie_blackSimpleButton.hoverCallback = () => this.onCustomHoodieOver(this.hoodie_black);
		hoodie_blackSimpleButton.hoverOutCallback = () => this.onCustomHoodieOut(this.hoodie_black);
		hoodie_blackSimpleButton.callback = () => this.changeColor("black");

		// hoodie_white (components)
		const hoodie_whiteSimpleButton = new SimpleButton(hoodie_white);
		hoodie_whiteSimpleButton.hoverCallback = () => this.onCustomHoodieOver(this.hoodie_white);
		hoodie_whiteSimpleButton.hoverOutCallback = () => this.onCustomHoodieOut(this.hoodie_white);
		hoodie_whiteSimpleButton.callback = () => this.changeColor("white");

		// hoodie_yellow (components)
		const hoodie_yellowSimpleButton = new SimpleButton(hoodie_yellow);
		hoodie_yellowSimpleButton.hoverCallback = () => this.onCustomHoodieOver(this.hoodie_yellow);
		hoodie_yellowSimpleButton.hoverOutCallback = () => this.onCustomHoodieOut(this.hoodie_yellow);
		hoodie_yellowSimpleButton.callback = () => this.changeColor("yellow");

		// hoodie_orange (components)
		const hoodie_orangeSimpleButton = new SimpleButton(hoodie_orange);
		hoodie_orangeSimpleButton.hoverCallback = () => this.onCustomHoodieOver(this.hoodie_orange);
		hoodie_orangeSimpleButton.hoverOutCallback = () => this.onCustomHoodieOut(this.hoodie_orange);
		hoodie_orangeSimpleButton.callback = () => this.changeColor("orange");

		// hoodie_red (components)
		const hoodie_redSimpleButton = new SimpleButton(hoodie_red);
		hoodie_redSimpleButton.hoverCallback = () => this.onCustomHoodieOver(this.hoodie_red);
		hoodie_redSimpleButton.hoverOutCallback = () => this.onCustomHoodieOut(this.hoodie_red);
		hoodie_redSimpleButton.callback = () => this.changeColor("red");

		// hoodie_puffle (components)
		const hoodie_puffleSimpleButton = new SimpleButton(hoodie_puffle);
		hoodie_puffleSimpleButton.hoverCallback = () => this.onCustomHoodieOver(this.hoodie_puffle);
		hoodie_puffleSimpleButton.hoverOutCallback = () => this.onCustomHoodieOut(this.hoodie_puffle);
		hoodie_puffleSimpleButton.callback = () => this.changePattern("puffle");

		// hoodie_stripes (components)
		const hoodie_stripesSimpleButton = new SimpleButton(hoodie_stripes);
		hoodie_stripesSimpleButton.hoverCallback = () => this.onCustomHoodieOver(this.hoodie_stripes);
		hoodie_stripesSimpleButton.hoverOutCallback = () => this.onCustomHoodieOut(this.hoodie_stripes);
		hoodie_stripesSimpleButton.callback = () => this.changePattern("stripes");

		// hoodie_stars (components)
		const hoodie_starsSimpleButton = new SimpleButton(hoodie_stars);
		hoodie_starsSimpleButton.hoverCallback = () => this.onCustomHoodieOver(this.hoodie_stars);
		hoodie_starsSimpleButton.hoverOutCallback = () => this.onCustomHoodieOut(this.hoodie_stars);
		hoodie_starsSimpleButton.callback = () => this.changePattern("stars");

		// hoodie_splatters (components)
		const hoodie_splattersSimpleButton = new SimpleButton(hoodie_splatters);
		hoodie_splattersSimpleButton.hoverCallback = () => this.onCustomHoodieOver(this.hoodie_splatters);
		hoodie_splattersSimpleButton.hoverOutCallback = () => this.onCustomHoodieOut(this.hoodie_splatters);
		hoodie_splattersSimpleButton.callback = () => this.changePattern("splatters");

		// hoodie_fade (components)
		const hoodie_fadeSimpleButton = new SimpleButton(hoodie_fade);
		hoodie_fadeSimpleButton.hoverCallback = () => this.onCustomHoodieOver(this.hoodie_fade);
		hoodie_fadeSimpleButton.hoverOutCallback = () => this.onCustomHoodieOut(this.hoodie_fade);
		hoodie_fadeSimpleButton.callback = () => this.changePattern("fade");

		// secret_yellow_foam_finger (components)
		const secret_yellow_foam_fingerSimpleButton = new SimpleButton(secret_yellow_foam_finger);
		secret_yellow_foam_fingerSimpleButton.callback = () => this.buy(5094);

		// buyBtn_1853 (components)
		const buyBtn_1853Button = new Button(buyBtn_1853);
		buyBtn_1853Button.spriteName = "buyBtn";
		buyBtn_1853Button.callback = () => this.buy(1853);
		buyBtn_1853Button.activeFrame = false;

		// priceNum_1853 (components)
		const priceNum_1853Pricetag = new Pricetag(priceNum_1853);
		priceNum_1853Pricetag.id = 1853;

		// nameTag_1853 (components)
		const nameTag_1853Name = new Name(nameTag_1853);
		nameTag_1853Name.id = 1853;

		// buyBtn_4344 (components)
		const buyBtn_4344Button = new Button(buyBtn_4344);
		buyBtn_4344Button.spriteName = "buyBtn";
		buyBtn_4344Button.callback = () => this.buy(4344);
		buyBtn_4344Button.activeFrame = false;

		// priceNum_4344 (components)
		const priceNum_4344Pricetag = new Pricetag(priceNum_4344);
		priceNum_4344Pricetag.id = 4344;

		// nameTag_4344 (components)
		const nameTag_4344Name = new Name(nameTag_4344);
		nameTag_4344Name.id = 4344;

		// buyBtn_4560 (components)
		const buyBtn_4560Button = new Button(buyBtn_4560);
		buyBtn_4560Button.spriteName = "buyBtn";
		buyBtn_4560Button.callback = () => this.buy(4560);
		buyBtn_4560Button.activeFrame = false;

		// priceNum_4560 (components)
		const priceNum_4560Pricetag = new Pricetag(priceNum_4560);
		priceNum_4560Pricetag.id = 4560;

		// nameTag_4560 (components)
		const nameTag_4560Name = new Name(nameTag_4560);
		nameTag_4560Name.id = 4560;

		// buyBtn_4561 (components)
		const buyBtn_4561Button = new Button(buyBtn_4561);
		buyBtn_4561Button.spriteName = "buyBtn";
		buyBtn_4561Button.callback = () => this.buy(4561);
		buyBtn_4561Button.activeFrame = false;

		// priceNum_4561 (components)
		const priceNum_4561Pricetag = new Pricetag(priceNum_4561);
		priceNum_4561Pricetag.id = 4561;

		// nameTag_4561 (components)
		const nameTag_4561Name = new Name(nameTag_4561);
		nameTag_4561Name.id = 4561;

		// buyBtn_4345 (components)
		const buyBtn_4345Button = new Button(buyBtn_4345);
		buyBtn_4345Button.spriteName = "buyBtn";
		buyBtn_4345Button.callback = () => this.buy(5345);
		buyBtn_4345Button.activeFrame = false;

		// priceNum_4345 (components)
		const priceNum_4345Pricetag = new Pricetag(priceNum_4345);
		priceNum_4345Pricetag.id = 4345;

		// nameTag_4345 (components)
		const nameTag_4345Name = new Name(nameTag_4345);
		nameTag_4345Name.id = 4345;

		// buyBtn_6104 (components)
		const buyBtn_6104Button = new Button(buyBtn_6104);
		buyBtn_6104Button.spriteName = "buyBtn";
		buyBtn_6104Button.callback = () => this.buy(6104);
		buyBtn_6104Button.activeFrame = false;

		// priceNum_6104 (components)
		const priceNum_6104Pricetag = new Pricetag(priceNum_6104);
		priceNum_6104Pricetag.id = 6104;

		// nameTag_6104 (components)
		const nameTag_6104Name = new Name(nameTag_6104);
		nameTag_6104Name.id = 6104;

		// buyBtn_6220 (components)
		const buyBtn_6220Button = new Button(buyBtn_6220);
		buyBtn_6220Button.spriteName = "buyBtn";
		buyBtn_6220Button.callback = () => this.buy(6220);
		buyBtn_6220Button.activeFrame = false;

		// priceNum_6220 (components)
		const priceNum_6220Pricetag = new Pricetag(priceNum_6220);
		priceNum_6220Pricetag.id = 6220;

		// nameTag_6220 (components)
		const nameTag_6220Name = new Name(nameTag_6220);
		nameTag_6220Name.id = 6220;

		// buyBtn_6108 (components)
		const buyBtn_6108Button = new Button(buyBtn_6108);
		buyBtn_6108Button.spriteName = "buyBtn";
		buyBtn_6108Button.callback = () => this.buy(6108);
		buyBtn_6108Button.activeFrame = false;

		// priceNum_6108 (components)
		const priceNum_6108Pricetag = new Pricetag(priceNum_6108);
		priceNum_6108Pricetag.id = 6108;

		// nameTag_6108 (components)
		const nameTag_6108Name = new Name(nameTag_6108);
		nameTag_6108Name.id = 6108;

		// buyBtn_6219 (components)
		const buyBtn_6219Button = new Button(buyBtn_6219);
		buyBtn_6219Button.spriteName = "buyBtn";
		buyBtn_6219Button.callback = () => this.buy(6219);
		buyBtn_6219Button.activeFrame = false;

		// priceNum_6219 (components)
		const priceNum_6219Pricetag = new Pricetag(priceNum_6219);
		priceNum_6219Pricetag.id = 6219;

		// nameTag_6219 (components)
		const nameTag_6219Name = new Name(nameTag_6219);
		nameTag_6219Name.id = 6219;

		// buyBtn_6106 (components)
		const buyBtn_6106Button = new Button(buyBtn_6106);
		buyBtn_6106Button.spriteName = "buyBtn";
		buyBtn_6106Button.callback = () => this.buy(6106);
		buyBtn_6106Button.activeFrame = false;

		// priceNum_6106 (components)
		const priceNum_6106Pricetag = new Pricetag(priceNum_6106);
		priceNum_6106Pricetag.id = 6106;

		// nameTag_6106 (components)
		const nameTag_6106Name = new Name(nameTag_6106);
		nameTag_6106Name.id = 6106;

		// buyBtn_6103 (components)
		const buyBtn_6103Button = new Button(buyBtn_6103);
		buyBtn_6103Button.spriteName = "buyBtn";
		buyBtn_6103Button.callback = () => this.buy(6103);
		buyBtn_6103Button.activeFrame = false;

		// priceNum_6103 (components)
		const priceNum_6103Pricetag = new Pricetag(priceNum_6103);
		priceNum_6103Pricetag.id = 6103;

		// nameTag_6103 (components)
		const nameTag_6103Name = new Name(nameTag_6103);
		nameTag_6103Name.id = 6103;

		// buyBtn_6003 (components)
		const buyBtn_6003Button = new Button(buyBtn_6003);
		buyBtn_6003Button.spriteName = "buyBtn";
		buyBtn_6003Button.callback = () => this.buy(6003);
		buyBtn_6003Button.activeFrame = false;

		// priceNum_6003 (components)
		const priceNum_6003Pricetag = new Pricetag(priceNum_6003);
		priceNum_6003Pricetag.id = 6003;

		// nameTag_6003 (components)
		const nameTag_6003Name = new Name(nameTag_6003);
		nameTag_6003Name.id = 6003;

		// buyBtn_6004 (components)
		const buyBtn_6004Button = new Button(buyBtn_6004);
		buyBtn_6004Button.spriteName = "buyBtn";
		buyBtn_6004Button.callback = () => this.buy(6004);
		buyBtn_6004Button.activeFrame = false;

		// priceNum_6004 (components)
		const priceNum_6004Pricetag = new Pricetag(priceNum_6004);
		priceNum_6004Pricetag.id = 6004;

		// nameTag_6004 (components)
		const nameTag_6004Name = new Name(nameTag_6004);
		nameTag_6004Name.id = 6004;

		// buyBtn_6064 (components)
		const buyBtn_6064Button = new Button(buyBtn_6064);
		buyBtn_6064Button.spriteName = "buyBtn";
		buyBtn_6064Button.callback = () => this.buy(6064);
		buyBtn_6064Button.activeFrame = false;

		// priceNum_6064 (components)
		const priceNum_6064Pricetag = new Pricetag(priceNum_6064);
		priceNum_6064Pricetag.id = 6064;

		// nameTag_6064 (components)
		const nameTag_6064Name = new Name(nameTag_6064);
		nameTag_6064Name.id = 6064;

		// buyBtn_6105 (components)
		const buyBtn_6105Button = new Button(buyBtn_6105);
		buyBtn_6105Button.spriteName = "buyBtn";
		buyBtn_6105Button.callback = () => this.buy(6105);
		buyBtn_6105Button.activeFrame = false;

		// priceNum_6105 (components)
		const priceNum_6105Pricetag = new Pricetag(priceNum_6105);
		priceNum_6105Pricetag.id = 6105;

		// nameTag_6105 (components)
		const nameTag_6105Name = new Name(nameTag_6105);
		nameTag_6105Name.id = 6105;

		// buyBtn_6107 (components)
		const buyBtn_6107Button = new Button(buyBtn_6107);
		buyBtn_6107Button.spriteName = "buyBtn";
		buyBtn_6107Button.callback = () => this.buy(6107);
		buyBtn_6107Button.activeFrame = false;

		// priceNum_6107 (components)
		const priceNum_6107Pricetag = new Pricetag(priceNum_6107);
		priceNum_6107Pricetag.id = 6107;

		// nameTag_6107 (components)
		const nameTag_6107Name = new Name(nameTag_6107);
		nameTag_6107Name.id = 6107;

		// buyBtn_6050 (components)
		const buyBtn_6050Button = new Button(buyBtn_6050);
		buyBtn_6050Button.spriteName = "buyBtn";
		buyBtn_6050Button.callback = () => this.buy(6050);
		buyBtn_6050Button.activeFrame = false;

		// priceNum_6050 (components)
		const priceNum_6050Pricetag = new Pricetag(priceNum_6050);
		priceNum_6050Pricetag.id = 6050;

		// nameTag_6050 (components)
		const nameTag_6050Name = new Name(nameTag_6050);
		nameTag_6050Name.id = 6050;

		// secret_black_kicks (components)
		const secret_black_kicksSimpleButton = new SimpleButton(secret_black_kicks);
		secret_black_kicksSimpleButton.callback = () => this.buy(6237);

		// buyBtn_1373 (components)
		const buyBtn_1373Button = new Button(buyBtn_1373);
		buyBtn_1373Button.spriteName = "buyBtn";
		buyBtn_1373Button.callback = () => this.buy(1373);
		buyBtn_1373Button.activeFrame = false;

		// priceNum_1373 (components)
		const priceNum_1373Pricetag = new Pricetag(priceNum_1373);
		priceNum_1373Pricetag.id = 1373;

		// nameTag_1373 (components)
		const nameTag_1373Name = new Name(nameTag_1373);
		nameTag_1373Name.id = 1373;

		// buyBtn_1372 (components)
		const buyBtn_1372Button = new Button(buyBtn_1372);
		buyBtn_1372Button.spriteName = "buyBtn";
		buyBtn_1372Button.callback = () => this.buy(1372);
		buyBtn_1372Button.activeFrame = false;

		// priceNum_1372 (components)
		const priceNum_1372Pricetag = new Pricetag(priceNum_1372);
		priceNum_1372Pricetag.id = 1372;

		// nameTag_1372 (components)
		const nameTag_1372Name = new Name(nameTag_1372);
		nameTag_1372Name.id = 1372;

		// buyBtn_1371 (components)
		const buyBtn_1371Button = new Button(buyBtn_1371);
		buyBtn_1371Button.spriteName = "buyBtn";
		buyBtn_1371Button.callback = () => this.buy(1371);
		buyBtn_1371Button.activeFrame = false;

		// priceNum_1371 (components)
		const priceNum_1371Pricetag = new Pricetag(priceNum_1371);
		priceNum_1371Pricetag.id = 1371;

		// nameTag_1371 (components)
		const nameTag_1371Name = new Name(nameTag_1371);
		nameTag_1371Name.id = 1371;

		// buyBtn_1370 (components)
		const buyBtn_1370Button = new Button(buyBtn_1370);
		buyBtn_1370Button.spriteName = "buyBtn";
		buyBtn_1370Button.callback = () => this.buy(1370);
		buyBtn_1370Button.activeFrame = false;

		// priceNum_1370 (components)
		const priceNum_1370Pricetag = new Pricetag(priceNum_1370);
		priceNum_1370Pricetag.id = 1370;

		// nameTag_1370 (components)
		const nameTag_1370Name = new Name(nameTag_1370);
		nameTag_1370Name.id = 1370;

		// buyBtn_4304 (components)
		const buyBtn_4304Button = new Button(buyBtn_4304);
		buyBtn_4304Button.spriteName = "buyBtn";
		buyBtn_4304Button.callback = () => this.buy(4304);
		buyBtn_4304Button.activeFrame = false;

		// priceNum_4304 (components)
		const priceNum_4304Pricetag = new Pricetag(priceNum_4304);
		priceNum_4304Pricetag.id = 4304;

		// nameTag_4304 (components)
		const nameTag_4304Name = new Name(nameTag_4304);
		nameTag_4304Name.id = 4304;

		// buyBtn_4303 (components)
		const buyBtn_4303Button = new Button(buyBtn_4303);
		buyBtn_4303Button.spriteName = "buyBtn";
		buyBtn_4303Button.callback = () => this.buy(4303);
		buyBtn_4303Button.activeFrame = false;

		// priceNum_4303 (components)
		const priceNum_4303Pricetag = new Pricetag(priceNum_4303);
		priceNum_4303Pricetag.id = 4303;

		// nameTag_4303 (components)
		const nameTag_4303Name = new Name(nameTag_4303);
		nameTag_4303Name.id = 4303;

		// buyBtn_4302 (components)
		const buyBtn_4302Button = new Button(buyBtn_4302);
		buyBtn_4302Button.spriteName = "buyBtn";
		buyBtn_4302Button.callback = () => this.buy(4302);
		buyBtn_4302Button.activeFrame = false;

		// priceNum_4302 (components)
		const priceNum_4302Pricetag = new Pricetag(priceNum_4302);
		priceNum_4302Pricetag.id = 4302;

		// nameTag_4302 (components)
		const nameTag_4302Name = new Name(nameTag_4302);
		nameTag_4302Name.id = 4302;

		// buyBtn_4301 (components)
		const buyBtn_4301Button = new Button(buyBtn_4301);
		buyBtn_4301Button.spriteName = "buyBtn";
		buyBtn_4301Button.callback = () => this.buy(4301);
		buyBtn_4301Button.activeFrame = false;

		// priceNum_4301 (components)
		const priceNum_4301Pricetag = new Pricetag(priceNum_4301);
		priceNum_4301Pricetag.id = 4301;

		// nameTag_4301 (components)
		const nameTag_4301Name = new Name(nameTag_4301);
		nameTag_4301Name.id = 4301;

		// buyBtn_1844 (components)
		const buyBtn_1844Button = new Button(buyBtn_1844);
		buyBtn_1844Button.spriteName = "buyBtn";
		buyBtn_1844Button.callback = () => this.buy(1844);
		buyBtn_1844Button.activeFrame = false;

		// priceNum_1844 (components)
		const priceNum_1844Pricetag = new Pricetag(priceNum_1844);
		priceNum_1844Pricetag.id = 1844;

		// nameTag_1844 (components)
		const nameTag_1844Name = new Name(nameTag_1844);
		nameTag_1844Name.id = 1844;

		// buyBtn_24062 (components)
		const buyBtn_24062Button = new Button(buyBtn_24062);
		buyBtn_24062Button.spriteName = "buyBtn";
		buyBtn_24062Button.callback = () => this.buy(24062);
		buyBtn_24062Button.activeFrame = false;

		// priceNum_24062 (components)
		const priceNum_24062Pricetag = new Pricetag(priceNum_24062);
		priceNum_24062Pricetag.id = 24062;

		// nameTag_24062 (components)
		const nameTag_24062Name = new Name(nameTag_24062);
		nameTag_24062Name.id = 24062;

		// buyBtn_1846 (components)
		const buyBtn_1846Button = new Button(buyBtn_1846);
		buyBtn_1846Button.spriteName = "buyBtn";
		buyBtn_1846Button.callback = () => this.buy(1846);
		buyBtn_1846Button.activeFrame = false;

		// priceNum_1846 (components)
		const priceNum_1846Pricetag = new Pricetag(priceNum_1846);
		priceNum_1846Pricetag.id = 1846;

		// nameTag_1846 (components)
		const nameTag_1846Name = new Name(nameTag_1846);
		nameTag_1846Name.id = 1846;

		// buyBtn_4811 (components)
		const buyBtn_4811Button = new Button(buyBtn_4811);
		buyBtn_4811Button.spriteName = "buyBtn";
		buyBtn_4811Button.callback = () => this.buy(3811);
		buyBtn_4811Button.activeFrame = false;

		// priceNum_4811 (components)
		const priceNum_4811Pricetag = new Pricetag(priceNum_4811);
		priceNum_4811Pricetag.id = 4811;

		// nameTag_4811 (components)
		const nameTag_4811Name = new Name(nameTag_4811);
		nameTag_4811Name.id = 4811;

		// buyBtn_1365 (components)
		const buyBtn_1365Button = new Button(buyBtn_1365);
		buyBtn_1365Button.spriteName = "buyBtn";
		buyBtn_1365Button.callback = () => this.buy(1365);
		buyBtn_1365Button.activeFrame = false;

		// priceNum_1365 (components)
		const priceNum_1365Pricetag = new Pricetag(priceNum_1365);
		priceNum_1365Pricetag.id = 1365;

		// nameTag_1365 (components)
		const nameTag_1365Name = new Name(nameTag_1365);
		nameTag_1365Name.id = 1365;

		// buyBtn_1360 (components)
		const buyBtn_1360Button = new Button(buyBtn_1360);
		buyBtn_1360Button.spriteName = "buyBtn";
		buyBtn_1360Button.callback = () => this.buy(1360);
		buyBtn_1360Button.activeFrame = false;

		// priceNum_1360 (components)
		const priceNum_1360Pricetag = new Pricetag(priceNum_1360);
		priceNum_1360Pricetag.id = 1360;

		// nameTag_1360 (components)
		const nameTag_1360Name = new Name(nameTag_1360);
		nameTag_1360Name.id = 1360;

		// buyBtn_1361 (components)
		const buyBtn_1361Button = new Button(buyBtn_1361);
		buyBtn_1361Button.spriteName = "buyBtn";
		buyBtn_1361Button.callback = () => this.buy(1361);
		buyBtn_1361Button.activeFrame = false;

		// priceNum_1361 (components)
		const priceNum_1361Pricetag = new Pricetag(priceNum_1361);
		priceNum_1361Pricetag.id = 1361;

		// nameTag_1361 (components)
		const nameTag_1361Name = new Name(nameTag_1361);
		nameTag_1361Name.id = 1361;

		// buyBtn_1362 (components)
		const buyBtn_1362Button = new Button(buyBtn_1362);
		buyBtn_1362Button.spriteName = "buyBtn";
		buyBtn_1362Button.callback = () => this.buy(1362);
		buyBtn_1362Button.activeFrame = false;

		// priceNum_1362 (components)
		const priceNum_1362Pricetag = new Pricetag(priceNum_1362);
		priceNum_1362Pricetag.id = 1362;

		// nameTag_1362 (components)
		const nameTag_1362Name = new Name(nameTag_1362);
		nameTag_1362Name.id = 1362;

		// buyBtn_315 (components)
		const buyBtn_315Button = new Button(buyBtn_315);
		buyBtn_315Button.spriteName = "buyBtn";
		buyBtn_315Button.callback = () => this.buy(315);
		buyBtn_315Button.activeFrame = false;

		// priceNum_315 (components)
		const priceNum_315Pricetag = new Pricetag(priceNum_315);
		priceNum_315Pricetag.id = 315;

		// nameTag_315 (components)
		const nameTag_315Name = new Name(nameTag_315);
		nameTag_315Name.id = 315;

		// buyBtn_302 (components)
		const buyBtn_302Button = new Button(buyBtn_302);
		buyBtn_302Button.spriteName = "buyBtn";
		buyBtn_302Button.callback = () => this.buy(302);
		buyBtn_302Button.activeFrame = false;

		// priceNum_302 (components)
		const priceNum_302Pricetag = new Pricetag(priceNum_302);
		priceNum_302Pricetag.id = 302;

		// nameTag_302 (components)
		const nameTag_302Name = new Name(nameTag_302);
		nameTag_302Name.id = 302;

		// buyBtn_301 (components)
		const buyBtn_301Button = new Button(buyBtn_301);
		buyBtn_301Button.spriteName = "buyBtn";
		buyBtn_301Button.callback = () => this.buy(301);
		buyBtn_301Button.activeFrame = false;

		// priceNum_301 (components)
		const priceNum_301Pricetag = new Pricetag(priceNum_301);
		priceNum_301Pricetag.id = 301;

		// nameTag_301 (components)
		const nameTag_301Name = new Name(nameTag_301);
		nameTag_301Name.id = 301;

		// buyBtn_3007 (components)
		const buyBtn_3007Button = new Button(buyBtn_3007);
		buyBtn_3007Button.spriteName = "buyBtn";
		buyBtn_3007Button.callback = () => this.buy(3007);
		buyBtn_3007Button.activeFrame = false;

		// priceNum_3007 (components)
		const priceNum_3007Pricetag = new Pricetag(priceNum_3007);
		priceNum_3007Pricetag.id = 3007;

		// nameTag_3007 (components)
		const nameTag_3007Name = new Name(nameTag_3007);
		nameTag_3007Name.id = 3007;

		// buyBtn_303 (components)
		const buyBtn_303Button = new Button(buyBtn_303);
		buyBtn_303Button.spriteName = "buyBtn";
		buyBtn_303Button.callback = () => this.buy(303);
		buyBtn_303Button.activeFrame = false;

		// priceNum_303 (components)
		const priceNum_303Pricetag = new Pricetag(priceNum_303);
		priceNum_303Pricetag.id = 303;

		// nameTag_303 (components)
		const nameTag_303Name = new Name(nameTag_303);
		nameTag_303Name.id = 303;

		// buyBtn_1363 (components)
		const buyBtn_1363Button = new Button(buyBtn_1363);
		buyBtn_1363Button.spriteName = "buyBtn";
		buyBtn_1363Button.callback = () => this.buy(1363);
		buyBtn_1363Button.activeFrame = false;

		// priceNum_1363 (components)
		const priceNum_1363Pricetag = new Pricetag(priceNum_1363);
		priceNum_1363Pricetag.id = 1363;

		// nameTag_1363 (components)
		const nameTag_1363Name = new Name(nameTag_1363);
		nameTag_1363Name.id = 1363;

		// buyBtn_3102 (components)
		const buyBtn_3102Button = new Button(buyBtn_3102);
		buyBtn_3102Button.spriteName = "buyBtn";
		buyBtn_3102Button.callback = () => this.buy(3102);
		buyBtn_3102Button.activeFrame = false;

		// priceNum_3102 (components)
		const priceNum_3102Pricetag = new Pricetag(priceNum_3102);
		priceNum_3102Pricetag.id = 3102;

		// nameTag_3102 (components)
		const nameTag_3102Name = new Name(nameTag_3102);
		nameTag_3102Name.id = 3102;

		// buyBtn_1364 (components)
		const buyBtn_1364Button = new Button(buyBtn_1364);
		buyBtn_1364Button.spriteName = "buyBtn";
		buyBtn_1364Button.callback = () => this.buy(1264);
		buyBtn_1364Button.activeFrame = false;

		// priceNum_1364 (components)
		const priceNum_1364Pricetag = new Pricetag(priceNum_1364);
		priceNum_1364Pricetag.id = 1364;

		// nameTag_1364 (components)
		const nameTag_1364Name = new Name(nameTag_1364);
		nameTag_1364Name.id = 1364;

		// buyBtn_1379 (components)
		const buyBtn_1379Button = new Button(buyBtn_1379);
		buyBtn_1379Button.spriteName = "buyBtn";
		buyBtn_1379Button.callback = () => this.buy(1379);
		buyBtn_1379Button.activeFrame = false;

		// priceNum_1379 (components)
		const priceNum_1379Pricetag = new Pricetag(priceNum_1379);
		priceNum_1379Pricetag.id = 1379;

		// nameTag_1379 (components)
		const nameTag_1379Name = new Name(nameTag_1379);
		nameTag_1379Name.id = 1379;

		// buyBtn_1378 (components)
		const buyBtn_1378Button = new Button(buyBtn_1378);
		buyBtn_1378Button.spriteName = "buyBtn";
		buyBtn_1378Button.callback = () => this.buy(1378);
		buyBtn_1378Button.activeFrame = false;

		// priceNum_1378 (components)
		const priceNum_1378Pricetag = new Pricetag(priceNum_1378);
		priceNum_1378Pricetag.id = 1378;

		// nameTag_1378 (components)
		const nameTag_1378Name = new Name(nameTag_1378);
		nameTag_1378Name.id = 1378;

		// buyBtn_1377 (components)
		const buyBtn_1377Button = new Button(buyBtn_1377);
		buyBtn_1377Button.spriteName = "buyBtn";
		buyBtn_1377Button.callback = () => this.buy(1377);
		buyBtn_1377Button.activeFrame = false;

		// priceNum_1377 (components)
		const priceNum_1377Pricetag = new Pricetag(priceNum_1377);
		priceNum_1377Pricetag.id = 1377;

		// nameTag_1377 (components)
		const nameTag_1377Name = new Name(nameTag_1377);
		nameTag_1377Name.id = 1377;

		// buyBtn_1376 (components)
		const buyBtn_1376Button = new Button(buyBtn_1376);
		buyBtn_1376Button.spriteName = "buyBtn";
		buyBtn_1376Button.callback = () => this.buy(1376);
		buyBtn_1376Button.activeFrame = false;

		// priceNum_1376 (components)
		const priceNum_1376Pricetag = new Pricetag(priceNum_1376);
		priceNum_1376Pricetag.id = 1376;

		// nameTag_1376 (components)
		const nameTag_1376Name = new Name(nameTag_1376);
		nameTag_1376Name.id = 1376;

		// buyBtn_4310 (components)
		const buyBtn_4310Button = new Button(buyBtn_4310);
		buyBtn_4310Button.spriteName = "buyBtn";
		buyBtn_4310Button.callback = () => this.buy(4310);
		buyBtn_4310Button.activeFrame = false;

		// priceNum_4310 (components)
		const priceNum_4310Pricetag = new Pricetag(priceNum_4310);
		priceNum_4310Pricetag.id = 4310;

		// nameTag_4310 (components)
		const nameTag_4310Name = new Name(nameTag_4310);
		nameTag_4310Name.id = 4310;

		// buyBtn_4309 (components)
		const buyBtn_4309Button = new Button(buyBtn_4309);
		buyBtn_4309Button.spriteName = "buyBtn";
		buyBtn_4309Button.callback = () => this.buy(4309);
		buyBtn_4309Button.activeFrame = false;

		// priceNum_4309 (components)
		const priceNum_4309Pricetag = new Pricetag(priceNum_4309);
		priceNum_4309Pricetag.id = 4309;

		// nameTag_4309 (components)
		const nameTag_4309Name = new Name(nameTag_4309);
		nameTag_4309Name.id = 4309;

		// buyBtn_4308 (components)
		const buyBtn_4308Button = new Button(buyBtn_4308);
		buyBtn_4308Button.spriteName = "buyBtn";
		buyBtn_4308Button.callback = () => this.buy(4308);
		buyBtn_4308Button.activeFrame = false;

		// priceNum_4308 (components)
		const priceNum_4308Pricetag = new Pricetag(priceNum_4308);
		priceNum_4308Pricetag.id = 4308;

		// nameTag_4308 (components)
		const nameTag_4308Name = new Name(nameTag_4308);
		nameTag_4308Name.id = 4308;

		// buyBtn_4307 (components)
		const buyBtn_4307Button = new Button(buyBtn_4307);
		buyBtn_4307Button.spriteName = "buyBtn";
		buyBtn_4307Button.callback = () => this.buy(4307);
		buyBtn_4307Button.activeFrame = false;

		// priceNum_4307 (components)
		const priceNum_4307Pricetag = new Pricetag(priceNum_4307);
		priceNum_4307Pricetag.id = 4307;

		// nameTag_4307 (components)
		const nameTag_4307Name = new Name(nameTag_4307);
		nameTag_4307Name.id = 4307;

		// buyBtn_1375 (components)
		const buyBtn_1375Button = new Button(buyBtn_1375);
		buyBtn_1375Button.spriteName = "buyBtn";
		buyBtn_1375Button.callback = () => this.buy(1375);
		buyBtn_1375Button.activeFrame = false;

		// priceNum_1375 (components)
		const priceNum_1375Pricetag = new Pricetag(priceNum_1375);
		priceNum_1375Pricetag.id = 1375;

		// nameTag_1375 (components)
		const nameTag_1375Name = new Name(nameTag_1375);
		nameTag_1375Name.id = 1375;

		// buyBtn_4306 (components)
		const buyBtn_4306Button = new Button(buyBtn_4306);
		buyBtn_4306Button.spriteName = "buyBtn";
		buyBtn_4306Button.callback = () => this.buy(4306);
		buyBtn_4306Button.activeFrame = false;

		// priceNum_4306 (components)
		const priceNum_4306Pricetag = new Pricetag(priceNum_4306);
		priceNum_4306Pricetag.id = 4306;

		// nameTag_4306 (components)
		const nameTag_4306Name = new Name(nameTag_4306);
		nameTag_4306Name.id = 4306;

		// buyBtn_1374 (components)
		const buyBtn_1374Button = new Button(buyBtn_1374);
		buyBtn_1374Button.spriteName = "buyBtn";
		buyBtn_1374Button.callback = () => this.buy(1375);
		buyBtn_1374Button.activeFrame = false;

		// priceNum_1374 (components)
		const priceNum_1374Pricetag = new Pricetag(priceNum_1374);
		priceNum_1374Pricetag.id = 1374;

		// nameTag_1374 (components)
		const nameTag_1374Name = new Name(nameTag_1374);
		nameTag_1374Name.id = 1374;

		// buyBtn_4305 (components)
		const buyBtn_4305Button = new Button(buyBtn_4305);
		buyBtn_4305Button.spriteName = "buyBtn";
		buyBtn_4305Button.callback = () => this.buy(4305);
		buyBtn_4305Button.activeFrame = false;

		// priceNum_4305 (components)
		const priceNum_4305Pricetag = new Pricetag(priceNum_4305);
		priceNum_4305Pricetag.id = 4305;

		// nameTag_4305 (components)
		const nameTag_4305Name = new Name(nameTag_4305);
		nameTag_4305Name.id = 4305;

		// secret_snow_style_jacket (components)
		const secret_snow_style_jacketSimpleButton = new SimpleButton(secret_snow_style_jacket);
		secret_snow_style_jacketSimpleButton.callback = () => this.buy(4996);

		// buyBtn_1368 (components)
		const buyBtn_1368Button = new Button(buyBtn_1368);
		buyBtn_1368Button.spriteName = "buyBtn";
		buyBtn_1368Button.callback = () => this.buy(1368);
		buyBtn_1368Button.activeFrame = false;

		// priceNum_1368 (components)
		const priceNum_1368Pricetag = new Pricetag(priceNum_1368);
		priceNum_1368Pricetag.id = 1368;

		// nameTag_1368 (components)
		const nameTag_1368Name = new Name(nameTag_1368);
		nameTag_1368Name.id = 1368;

		// buyBtn_1367 (components)
		const buyBtn_1367Button = new Button(buyBtn_1367);
		buyBtn_1367Button.spriteName = "buyBtn";
		buyBtn_1367Button.callback = () => this.buy(1367);
		buyBtn_1367Button.activeFrame = false;

		// priceNum_1367 (components)
		const priceNum_1367Pricetag = new Pricetag(priceNum_1367);
		priceNum_1367Pricetag.id = 1367;

		// nameTag_1367 (components)
		const nameTag_1367Name = new Name(nameTag_1367);
		nameTag_1367Name.id = 1367;

		// buyBtn_1369 (components)
		const buyBtn_1369Button = new Button(buyBtn_1369);
		buyBtn_1369Button.spriteName = "buyBtn";
		buyBtn_1369Button.callback = () => this.buy(1369);
		buyBtn_1369Button.activeFrame = false;

		// priceNum_1369 (components)
		const priceNum_1369Pricetag = new Pricetag(priceNum_1369);
		priceNum_1369Pricetag.id = 1369;

		// nameTag_1369 (components)
		const nameTag_1369Name = new Name(nameTag_1369);
		nameTag_1369Name.id = 1369;

		// buyBtn_3107 (components)
		const buyBtn_3107Button = new Button(buyBtn_3107);
		buyBtn_3107Button.spriteName = "buyBtn";
		buyBtn_3107Button.callback = () => this.buy(3107);
		buyBtn_3107Button.activeFrame = false;

		// priceNum_3107 (components)
		const priceNum_3107Pricetag = new Pricetag(priceNum_3107);
		priceNum_3107Pricetag.id = 3107;

		// nameTag_3107 (components)
		const nameTag_3107Name = new Name(nameTag_3107);
		nameTag_3107Name.id = 3107;

		// buyBtn_3106 (components)
		const buyBtn_3106Button = new Button(buyBtn_3106);
		buyBtn_3106Button.spriteName = "buyBtn";
		buyBtn_3106Button.callback = () => this.buy(3106);
		buyBtn_3106Button.activeFrame = false;

		// priceNum_3106 (components)
		const priceNum_3106Pricetag = new Pricetag(priceNum_3106);
		priceNum_3106Pricetag.id = 3106;

		// nameTag_3106 (components)
		const nameTag_3106Name = new Name(nameTag_3106);
		nameTag_3106Name.id = 3106;

		// buyBtn_3105 (components)
		const buyBtn_3105Button = new Button(buyBtn_3105);
		buyBtn_3105Button.spriteName = "buyBtn";
		buyBtn_3105Button.callback = () => this.buy(3105);
		buyBtn_3105Button.activeFrame = false;

		// priceNum_3105 (components)
		const priceNum_3105Pricetag = new Pricetag(priceNum_3105);
		priceNum_3105Pricetag.id = 3105;

		// nameTag_3105 (components)
		const nameTag_3105Name = new Name(nameTag_3105);
		nameTag_3105Name.id = 3105;

		// buyBtn_3205 (components)
		const buyBtn_3205Button = new Button(buyBtn_3205);
		buyBtn_3205Button.spriteName = "buyBtn";
		buyBtn_3205Button.callback = () => this.buy(3205);
		buyBtn_3205Button.activeFrame = false;

		// priceNum_3205 (components)
		const priceNum_3205Pricetag = new Pricetag(priceNum_3205);
		priceNum_3205Pricetag.id = 3205;

		// nameTag_3205 (components)
		const nameTag_3205Name = new Name(nameTag_3205);
		nameTag_3205Name.id = 3205;

		// buyBtn_1847 (components)
		const buyBtn_1847Button = new Button(buyBtn_1847);
		buyBtn_1847Button.spriteName = "buyBtn";
		buyBtn_1847Button.callback = () => this.buy(1847);
		buyBtn_1847Button.activeFrame = false;

		// priceNum_1847 (components)
		const priceNum_1847Pricetag = new Pricetag(priceNum_1847);
		priceNum_1847Pricetag.id = 1847;

		// nameTag_1847 (components)
		const nameTag_1847Name = new Name(nameTag_1847);
		nameTag_1847Name.id = 1847;

		// buyBtn_3206 (components)
		const buyBtn_3206Button = new Button(buyBtn_3206);
		buyBtn_3206Button.spriteName = "buyBtn";
		buyBtn_3206Button.callback = () => this.buy(3206);
		buyBtn_3206Button.activeFrame = false;

		// priceNum_3206 (components)
		const priceNum_3206Pricetag = new Pricetag(priceNum_3206);
		priceNum_3206Pricetag.id = 3206;

		// nameTag_3206 (components)
		const nameTag_3206Name = new Name(nameTag_3206);
		nameTag_3206Name.id = 3206;

		// buyBtn_1366 (components)
		const buyBtn_1366Button = new Button(buyBtn_1366);
		buyBtn_1366Button.spriteName = "buyBtn";
		buyBtn_1366Button.callback = () => this.buy(1366);
		buyBtn_1366Button.activeFrame = false;

		// priceNum_1366 (components)
		const priceNum_1366Pricetag = new Pricetag(priceNum_1366);
		priceNum_1366Pricetag.id = 1366;

		// nameTag_1366 (components)
		const nameTag_1366Name = new Name(nameTag_1366);
		nameTag_1366Name.id = 1366;

		// buyBtn_3104 (components)
		const buyBtn_3104Button = new Button(buyBtn_3104);
		buyBtn_3104Button.spriteName = "buyBtn";
		buyBtn_3104Button.callback = () => this.buy(3104);
		buyBtn_3104Button.activeFrame = false;

		// priceNum_3104 (components)
		const priceNum_3104Pricetag = new Pricetag(priceNum_3104);
		priceNum_3104Pricetag.id = 3104;

		// nameTag_3104 (components)
		const nameTag_3104Name = new Name(nameTag_3104);
		nameTag_3104Name.id = 3104;

		// buyBtn_1845 (components)
		const buyBtn_1845Button = new Button(buyBtn_1845);
		buyBtn_1845Button.spriteName = "buyBtn";
		buyBtn_1845Button.callback = () => this.buy(1845);
		buyBtn_1845Button.activeFrame = false;

		// priceNum_1845 (components)
		const priceNum_1845Pricetag = new Pricetag(priceNum_1845);
		priceNum_1845Pricetag.id = 1845;

		// nameTag_1845 (components)
		const nameTag_1845Name = new Name(nameTag_1845);
		nameTag_1845Name.id = 1845;

		// buyBtn_1841 (components)
		const buyBtn_1841Button = new Button(buyBtn_1841);
		buyBtn_1841Button.spriteName = "buyBtn";
		buyBtn_1841Button.callback = () => this.buy(1841);
		buyBtn_1841Button.activeFrame = false;

		// priceNum_1841 (components)
		const priceNum_1841Pricetag = new Pricetag(priceNum_1841);
		priceNum_1841Pricetag.id = 1841;

		// nameTag_1841 (components)
		const nameTag_1841Name = new Name(nameTag_1841);
		nameTag_1841Name.id = 1841;

		// buyBtn_1843 (components)
		const buyBtn_1843Button = new Button(buyBtn_1843);
		buyBtn_1843Button.spriteName = "buyBtn";
		buyBtn_1843Button.callback = () => this.buy(1843);
		buyBtn_1843Button.activeFrame = false;

		// priceNum_1843 (components)
		const priceNum_1843Pricetag = new Pricetag(priceNum_1843);
		priceNum_1843Pricetag.id = 1843;

		// nameTag_1843 (components)
		const nameTag_1843Name = new Name(nameTag_1843);
		nameTag_1843Name.id = 1843;

		// buyBtn_1842 (components)
		const buyBtn_1842Button = new Button(buyBtn_1842);
		buyBtn_1842Button.spriteName = "buyBtn";
		buyBtn_1842Button.callback = () => this.buy(1842);
		buyBtn_1842Button.activeFrame = false;

		// priceNum_1842 (components)
		const priceNum_1842Pricetag = new Pricetag(priceNum_1842);
		priceNum_1842Pricetag.id = 1842;

		// nameTag_1842 (components)
		const nameTag_1842Name = new Name(nameTag_1842);
		nameTag_1842Name.id = 1842;

		// buyBtn_1840 (components)
		const buyBtn_1840Button = new Button(buyBtn_1840);
		buyBtn_1840Button.spriteName = "buyBtn";
		buyBtn_1840Button.callback = () => this.buy(1840);
		buyBtn_1840Button.activeFrame = false;

		// priceNum_1840 (components)
		const priceNum_1840Pricetag = new Pricetag(priceNum_1840);
		priceNum_1840Pricetag.id = 1840;

		// nameTag_1840 (components)
		const nameTag_1840Name = new Name(nameTag_1840);
		nameTag_1840Name.id = 1840;

		// buyBtn_3112 (components)
		const buyBtn_3112Button = new Button(buyBtn_3112);
		buyBtn_3112Button.spriteName = "buyBtn";
		buyBtn_3112Button.callback = () => this.buy(3112);
		buyBtn_3112Button.activeFrame = false;

		// priceNum_3112 (components)
		const priceNum_3112Pricetag = new Pricetag(priceNum_3112);
		priceNum_3112Pricetag.id = 3112;

		// nameTag_3112 (components)
		const nameTag_3112Name = new Name(nameTag_3112);
		nameTag_3112Name.id = 3112;

		// buyBtn_3109 (components)
		const buyBtn_3109Button = new Button(buyBtn_3109);
		buyBtn_3109Button.spriteName = "buyBtn";
		buyBtn_3109Button.callback = () => this.buy(3109);
		buyBtn_3109Button.activeFrame = false;

		// priceNum_3109 (components)
		const priceNum_3109Pricetag = new Pricetag(priceNum_3109);
		priceNum_3109Pricetag.id = 3109;

		// nameTag_3109 (components)
		const nameTag_3109Name = new Name(nameTag_3109);
		nameTag_3109Name.id = 3109;

		// buyBtn_3114 (components)
		const buyBtn_3114Button = new Button(buyBtn_3114);
		buyBtn_3114Button.spriteName = "buyBtn";
		buyBtn_3114Button.callback = () => this.buy(3114);
		buyBtn_3114Button.activeFrame = false;

		// priceNum_3114 (components)
		const priceNum_3114Pricetag = new Pricetag(priceNum_3114);
		priceNum_3114Pricetag.id = 3114;

		// nameTag_3114 (components)
		const nameTag_3114Name = new Name(nameTag_3114);
		nameTag_3114Name.id = 3114;

		// buyBtn_3108 (components)
		const buyBtn_3108Button = new Button(buyBtn_3108);
		buyBtn_3108Button.spriteName = "buyBtn";
		buyBtn_3108Button.callback = () => this.buy(3108);
		buyBtn_3108Button.activeFrame = false;

		// priceNum_3108 (components)
		const priceNum_3108Pricetag = new Pricetag(priceNum_3108);
		priceNum_3108Pricetag.id = 3108;

		// nameTag_3108 (components)
		const nameTag_3108Name = new Name(nameTag_3108);
		nameTag_3108Name.id = 3108;

		// buyBtn_3078 (components)
		const buyBtn_3078Button = new Button(buyBtn_3078);
		buyBtn_3078Button.spriteName = "buyBtn";
		buyBtn_3078Button.callback = () => this.buy(3078);
		buyBtn_3078Button.activeFrame = false;

		// priceNum_3078 (components)
		const priceNum_3078Pricetag = new Pricetag(priceNum_3078);
		priceNum_3078Pricetag.id = 3078;

		// nameTag_3078 (components)
		const nameTag_3078Name = new Name(nameTag_3078);
		nameTag_3078Name.id = 3078;

		// buyBtn_3113 (components)
		const buyBtn_3113Button = new Button(buyBtn_3113);
		buyBtn_3113Button.spriteName = "buyBtn";
		buyBtn_3113Button.callback = () => this.buy(3113);
		buyBtn_3113Button.activeFrame = false;

		// priceNum_3113 (components)
		const priceNum_3113Pricetag = new Pricetag(priceNum_3113);
		priceNum_3113Pricetag.id = 3113;

		// nameTag_3113 (components)
		const nameTag_3113Name = new Name(nameTag_3113);
		nameTag_3113Name.id = 3113;

		// buyBtn_3100 (components)
		const buyBtn_3100Button = new Button(buyBtn_3100);
		buyBtn_3100Button.spriteName = "buyBtn";
		buyBtn_3100Button.callback = () => this.buy(3100);
		buyBtn_3100Button.activeFrame = false;

		// priceNum_3100 (components)
		const priceNum_3100Pricetag = new Pricetag(priceNum_3100);
		priceNum_3100Pricetag.id = 3100;

		// nameTag_3100 (components)
		const nameTag_3100Name = new Name(nameTag_3100);
		nameTag_3100Name.id = 3100;

		// buyBtn_3110 (components)
		const buyBtn_3110Button = new Button(buyBtn_3110);
		buyBtn_3110Button.spriteName = "buyBtn";
		buyBtn_3110Button.callback = () => this.buy(3110);
		buyBtn_3110Button.activeFrame = false;

		// priceNum_3110 (components)
		const priceNum_3110Pricetag = new Pricetag(priceNum_3110);
		priceNum_3110Pricetag.id = 3100;

		// nameTag_3110 (components)
		const nameTag_3110Name = new Name(nameTag_3110);
		nameTag_3110Name.id = 3110;

		// buyBtn_3115 (components)
		const buyBtn_3115Button = new Button(buyBtn_3115);
		buyBtn_3115Button.spriteName = "buyBtn";
		buyBtn_3115Button.callback = () => this.buy(3115);
		buyBtn_3115Button.activeFrame = false;

		// priceNum_3115 (components)
		const priceNum_3115Pricetag = new Pricetag(priceNum_3115);
		priceNum_3115Pricetag.id = 3115;

		// nameTag_3115 (components)
		const nameTag_3115Name = new Name(nameTag_3115);
		nameTag_3115Name.id = 3115;

		// buyBtn_3202 (components)
		const buyBtn_3202Button = new Button(buyBtn_3202);
		buyBtn_3202Button.spriteName = "buyBtn";
		buyBtn_3202Button.callback = () => this.buy(3202);
		buyBtn_3202Button.activeFrame = false;

		// priceNum_3202 (components)
		const priceNum_3202Pricetag = new Pricetag(priceNum_3202);
		priceNum_3202Pricetag.id = 3202;

		// nameTag_3202 (components)
		const nameTag_3202Name = new Name(nameTag_3202);
		nameTag_3202Name.id = 3202;

		// buyBtn_3203 (components)
		const buyBtn_3203Button = new Button(buyBtn_3203);
		buyBtn_3203Button.spriteName = "buyBtn";
		buyBtn_3203Button.callback = () => this.buy(3203);
		buyBtn_3203Button.activeFrame = false;

		// priceNum_3203 (components)
		const priceNum_3203Pricetag = new Pricetag(priceNum_3203);
		priceNum_3203Pricetag.id = 3203;

		// nameTag_3203 (components)
		const nameTag_3203Name = new Name(nameTag_3203);
		nameTag_3203Name.id = 3203;

		// buyBtn_3111 (components)
		const buyBtn_3111Button = new Button(buyBtn_3111);
		buyBtn_3111Button.spriteName = "buyBtn";
		buyBtn_3111Button.callback = () => this.buy(3111);
		buyBtn_3111Button.activeFrame = false;

		// priceNum_3111 (components)
		const priceNum_3111Pricetag = new Pricetag(priceNum_3111);
		priceNum_3111Pricetag.id = 3111;

		// nameTag_3111 (components)
		const nameTag_3111Name = new Name(nameTag_3111);
		nameTag_3111Name.id = 3111;

		// nameTag_6036 (components)
		const nameTag_6036Name = new Name(nameTag_6036);
		nameTag_6036Name.id = 6036;

		// buyBtn_6036 (components)
		const buyBtn_6036Button = new Button(buyBtn_6036);
		buyBtn_6036Button.spriteName = "buyBtn";
		buyBtn_6036Button.callback = () => this.buy(6036);
		buyBtn_6036Button.activeFrame = false;

		// priceNum_6036 (components)
		const priceNum_6036Pricetag = new Pricetag(priceNum_6036);
		priceNum_6036Pricetag.id = 6036;

		// nameTag_6112 (components)
		const nameTag_6112Name = new Name(nameTag_6112);
		nameTag_6112Name.id = 6112;

		// buyBtn_6112 (components)
		const buyBtn_6112Button = new Button(buyBtn_6112);
		buyBtn_6112Button.spriteName = "buyBtn";
		buyBtn_6112Button.callback = () => this.buy(6112);
		buyBtn_6112Button.activeFrame = false;

		// priceNum_6112 (components)
		const priceNum_6112Pricetag = new Pricetag(priceNum_6112);
		priceNum_6112Pricetag.id = 6112;

		// nameTag_24056 (components)
		const nameTag_24056Name = new Name(nameTag_24056);
		nameTag_24056Name.id = 24056;

		// buyBtn_23056 (components)
		const buyBtn_23056Button = new Button(buyBtn_23056);
		buyBtn_23056Button.spriteName = "buyBtn";
		buyBtn_23056Button.callback = () => this.buy(23056);
		buyBtn_23056Button.activeFrame = false;

		// priceNum_24056 (components)
		const priceNum_24056Pricetag = new Pricetag(priceNum_24056);
		priceNum_24056Pricetag.id = 24056;

		// nameTag_24055 (components)
		const nameTag_24055Name = new Name(nameTag_24055);
		nameTag_24055Name.id = 24055;

		// buyBtn_23055 (components)
		const buyBtn_23055Button = new Button(buyBtn_23055);
		buyBtn_23055Button.spriteName = "buyBtn";
		buyBtn_23055Button.callback = () => this.buy(23055);
		buyBtn_23055Button.activeFrame = false;

		// priceNum_24055 (components)
		const priceNum_24055Pricetag = new Pricetag(priceNum_24055);
		priceNum_24055Pricetag.id = 24055;

		// nameTag_1836 (components)
		const nameTag_1836Name = new Name(nameTag_1836);
		nameTag_1836Name.id = 1836;

		// buyBtn_1836 (components)
		const buyBtn_1836Button = new Button(buyBtn_1836);
		buyBtn_1836Button.spriteName = "buyBtn";
		buyBtn_1836Button.callback = () => this.buy(1836);
		buyBtn_1836Button.activeFrame = false;

		// priceNum_1836 (components)
		const priceNum_1836Pricetag = new Pricetag(priceNum_1836);
		priceNum_1836Pricetag.id = 1836;

		// nameTag_1837 (components)
		const nameTag_1837Name = new Name(nameTag_1837);
		nameTag_1837Name.id = 1837;

		// buyBtn_1837 (components)
		const buyBtn_1837Button = new Button(buyBtn_1837);
		buyBtn_1837Button.spriteName = "buyBtn";
		buyBtn_1837Button.callback = () => this.buy(1837);
		buyBtn_1837Button.activeFrame = false;

		// priceNum_1837 (components)
		const priceNum_1837Pricetag = new Pricetag(priceNum_1837);
		priceNum_1837Pricetag.id = 1837;

		// secret_blue_skater_hat (components)
		const secret_blue_skater_hatSimpleButton = new SimpleButton(secret_blue_skater_hat);
		secret_blue_skater_hatSimpleButton.callback = () => this.buy(2149);

		// buyBtn_1838 (components)
		const buyBtn_1838Button = new Button(buyBtn_1838);
		buyBtn_1838Button.spriteName = "buyBtn";
		buyBtn_1838Button.callback = () => this.buy(1838);
		buyBtn_1838Button.activeFrame = false;

		// priceNum_1838 (components)
		const priceNum_1838Pricetag = new Pricetag(priceNum_1838);
		priceNum_1838Pricetag.id = 1838;

		// nameTag_1838 (components)
		const nameTag_1838Name = new Name(nameTag_1838);
		nameTag_1838Name.id = 1838;

		// buyBtn_1839 (components)
		const buyBtn_1839Button = new Button(buyBtn_1839);
		buyBtn_1839Button.spriteName = "buyBtn";
		buyBtn_1839Button.callback = () => this.buy(1839);
		buyBtn_1839Button.activeFrame = false;

		// priceNum_1839 (components)
		const priceNum_1839Pricetag = new Pricetag(priceNum_1839);
		priceNum_1839Pricetag.id = 1839;

		// nameTag_1839 (components)
		const nameTag_1839Name = new Name(nameTag_1839);
		nameTag_1839Name.id = 1839;

		// buyBtn_24058 (components)
		const buyBtn_24058Button = new Button(buyBtn_24058);
		buyBtn_24058Button.spriteName = "buyBtn";
		buyBtn_24058Button.callback = () => this.buy(24058);
		buyBtn_24058Button.activeFrame = false;

		// priceNum_24058 (components)
		const priceNum_24058Pricetag = new Pricetag(priceNum_24058);
		priceNum_24058Pricetag.id = 24058;

		// nameTag_24058 (components)
		const nameTag_24058Name = new Name(nameTag_24058);
		nameTag_24058Name.id = 24058;

		// buyBtn_24057 (components)
		const buyBtn_24057Button = new Button(buyBtn_24057);
		buyBtn_24057Button.spriteName = "buyBtn";
		buyBtn_24057Button.callback = () => this.buy(24057);
		buyBtn_24057Button.activeFrame = false;

		// priceNum_24057 (components)
		const priceNum_24057Pricetag = new Pricetag(priceNum_24057);
		priceNum_24057Pricetag.id = 24057;

		// nameTag_24057 (components)
		const nameTag_24057Name = new Name(nameTag_24057);
		nameTag_24057Name.id = 24057;

		// buyBtn_3200 (components)
		const buyBtn_3200Button = new Button(buyBtn_3200);
		buyBtn_3200Button.spriteName = "buyBtn";
		buyBtn_3200Button.callback = () => this.buy(3200);
		buyBtn_3200Button.activeFrame = false;

		// priceNum_3200 (components)
		const priceNum_3200Pricetag = new Pricetag(priceNum_3200);
		priceNum_3200Pricetag.id = 3200;

		// nameTag_3200 (components)
		const nameTag_3200Name = new Name(nameTag_3200);
		nameTag_3200Name.id = 3200;

		// buyBtn_6218 (components)
		const buyBtn_6218Button = new Button(buyBtn_6218);
		buyBtn_6218Button.spriteName = "buyBtn";
		buyBtn_6218Button.callback = () => this.buy(6128);
		buyBtn_6218Button.activeFrame = false;

		// priceNum_6218 (components)
		const priceNum_6218Pricetag = new Pricetag(priceNum_6218);
		priceNum_6218Pricetag.id = 6218;

		// nameTag_6218 (components)
		const nameTag_6218Name = new Name(nameTag_6218);
		nameTag_6218Name.id = 6218;

		// buyBtn_210 (components)
		const buyBtn_210Button = new Button(buyBtn_210);
		buyBtn_210Button.spriteName = "buyBtn";
		buyBtn_210Button.callback = () => this.buy(210);
		buyBtn_210Button.activeFrame = false;

		// priceNum_210 (components)
		const priceNum_210Pricetag = new Pricetag(priceNum_210);
		priceNum_210Pricetag.id = 210;

		// nameTag_210 (components)
		const nameTag_210Name = new Name(nameTag_210);
		nameTag_210Name.id = 210;

		// hover_210 (components)
		const hover_210SimpleButton = new SimpleButton(hover_210);
		hover_210SimpleButton.hoverCallback = () => this.rollover("rollover10006");

		// buyBtn_405 (components)
		const buyBtn_405Button = new Button(buyBtn_405);
		buyBtn_405Button.spriteName = "buyBtn";
		buyBtn_405Button.callback = () => this.buy(405);
		buyBtn_405Button.activeFrame = false;

		// priceNum_405 (components)
		const priceNum_405Pricetag = new Pricetag(priceNum_405);
		priceNum_405Pricetag.id = 405;

		// nameTag_405 (components)
		const nameTag_405Name = new Name(nameTag_405);
		nameTag_405Name.id = 405;

		// hover_405 (components)
		const hover_405SimpleButton = new SimpleButton(hover_405);
		hover_405SimpleButton.hoverCallback = () => this.rollover("rollover10007");

		// buyBtn_717 (components)
		const buyBtn_717Button = new Button(buyBtn_717);
		buyBtn_717Button.spriteName = "buyBtn";
		buyBtn_717Button.callback = () => this.buy(717);
		buyBtn_717Button.activeFrame = false;

		// priceNum_717 (components)
		const priceNum_717Pricetag = new Pricetag(priceNum_717);
		priceNum_717Pricetag.id = 717;

		// nameTag_717 (components)
		const nameTag_717Name = new Name(nameTag_717);
		nameTag_717Name.id = 717;

		// hover_717 (components)
		const hover_717SimpleButton = new SimpleButton(hover_717);
		hover_717SimpleButton.hoverCallback = () => this.rollover("rollover10003");

		// buyBtn_713 (components)
		const buyBtn_713Button = new Button(buyBtn_713);
		buyBtn_713Button.spriteName = "buyBtn";
		buyBtn_713Button.callback = () => this.buy(713);
		buyBtn_713Button.activeFrame = false;

		// priceNum_713 (components)
		const priceNum_713Pricetag = new Pricetag(priceNum_713);
		priceNum_713Pricetag.id = 713;

		// nameTag_713 (components)
		const nameTag_713Name = new Name(nameTag_713);
		nameTag_713Name.id = 713;

		// hover_713 (components)
		const hover_713SimpleButton = new SimpleButton(hover_713);
		hover_713SimpleButton.hoverCallback = () => this.rollover("rollover10004");

		// buyBtn_192 (components)
		const buyBtn_192Button = new Button(buyBtn_192);
		buyBtn_192Button.spriteName = "buyBtn";
		buyBtn_192Button.callback = () => this.buy(192);
		buyBtn_192Button.activeFrame = false;

		// priceNum_192 (components)
		const priceNum_192Pricetag = new Pricetag(priceNum_192);
		priceNum_192Pricetag.id = 192;

		// nameTag_192 (components)
		const nameTag_192Name = new Name(nameTag_192);
		nameTag_192Name.id = 192;

		// hover_192 (components)
		const hover_192SimpleButton = new SimpleButton(hover_192);
		hover_192SimpleButton.hoverCallback = () => this.rollover("rollover10005");

		// buyBtn_203 (components)
		const buyBtn_203Button = new Button(buyBtn_203);
		buyBtn_203Button.spriteName = "buyBtn";
		buyBtn_203Button.callback = () => this.buy(203);
		buyBtn_203Button.activeFrame = false;

		// priceNum_203 (components)
		const priceNum_203Pricetag = new Pricetag(priceNum_203);
		priceNum_203Pricetag.id = 203;

		// nameTag_203 (components)
		const nameTag_203Name = new Name(nameTag_203);
		nameTag_203Name.id = 203;

		// hover_203 (components)
		const hover_203SimpleButton = new SimpleButton(hover_203);
		hover_203SimpleButton.hoverCallback = () => this.rollover("rollover10001");

		// buyBtn_653 (components)
		const buyBtn_653Button = new Button(buyBtn_653);
		buyBtn_653Button.spriteName = "buyBtn";
		buyBtn_653Button.callback = () => this.buy(653);
		buyBtn_653Button.activeFrame = false;

		// priceNum_653 (components)
		const priceNum_653Pricetag = new Pricetag(priceNum_653);
		priceNum_653Pricetag.id = 653;

		// nameTag_653 (components)
		const nameTag_653Name = new Name(nameTag_653);
		nameTag_653Name.id = 653;

		// hover_653 (components)
		const hover_653SimpleButton = new SimpleButton(hover_653);
		hover_653SimpleButton.hoverCallback = () => this.rollover("rollover10002");

		// secret_pixel_shades (components)
		const secret_pixel_shadesSimpleButton = new SimpleButton(secret_pixel_shades);
		secret_pixel_shadesSimpleButton.callback = () => this.buy(2149);

		// hover_9258 (components)
		const hover_9258SimpleButton = new SimpleButton(hover_9258);
		hover_9258SimpleButton.hoverCallback = () => this.onBgOver(this.hover_9258);
		hover_9258SimpleButton.hoverOutCallback = () => this.onBgOut(this.hover_9258);
		hover_9258SimpleButton.callback = () => this.buy(9258);

		// hover_9259 (components)
		const hover_9259SimpleButton = new SimpleButton(hover_9259);
		hover_9259SimpleButton.hoverCallback = () => this.onBgOver(this.hover_9259);
		hover_9259SimpleButton.hoverOutCallback = () => this.onBgOut(this.hover_9259);
		hover_9259SimpleButton.callback = () => this.buy(9259);

		// hover_9254 (components)
		const hover_9254SimpleButton = new SimpleButton(hover_9254);
		hover_9254SimpleButton.hoverCallback = () => this.onBgOver(this.hover_9254);
		hover_9254SimpleButton.hoverOutCallback = () => this.onBgOut(this.hover_9254);
		hover_9254SimpleButton.callback = () => this.buy(9254);

		// hover_9253 (components)
		const hover_9253SimpleButton = new SimpleButton(hover_9253);
		hover_9253SimpleButton.hoverCallback = () => this.onBgOver(this.hover_9253);
		hover_9253SimpleButton.hoverOutCallback = () => this.onBgOut(this.hover_9253);
		hover_9253SimpleButton.callback = () => this.buy(9253);

		// hover_9102 (components)
		const hover_9102SimpleButton = new SimpleButton(hover_9102);
		hover_9102SimpleButton.hoverCallback = () => this.onBgOver(this.hover_9102);
		hover_9102SimpleButton.hoverOutCallback = () => this.onBgOut(this.hover_9102);
		hover_9102SimpleButton.callback = () => this.buy(9102);

		// hover_9014 (components)
		const hover_9014SimpleButton = new SimpleButton(hover_9014);
		hover_9014SimpleButton.hoverCallback = () => this.onBgOver(this.hover_9014);
		hover_9014SimpleButton.hoverOutCallback = () => this.onBgOut(this.hover_9014);
		hover_9014SimpleButton.callback = () => this.buy(9014);

		// hover_9059 (components)
		const hover_9059SimpleButton = new SimpleButton(hover_9059);
		hover_9059SimpleButton.hoverCallback = () => this.onBgOver(this.hover_9059);
		hover_9059SimpleButton.hoverOutCallback = () => this.onBgOut(this.hover_9059);
		hover_9059SimpleButton.callback = () => this.buy(9059);

		// hover_9086 (components)
		const hover_9086SimpleButton = new SimpleButton(hover_9086);
		hover_9086SimpleButton.hoverCallback = () => this.onBgOver(this.hover_9086);
		hover_9086SimpleButton.hoverOutCallback = () => this.onBgOut(this.hover_9086);
		hover_9086SimpleButton.callback = () => this.buy(9086);

		// blueHover (components)
		const blueHoverSimpleButton = new SimpleButton(blueHover);
		blueHoverSimpleButton.hoverCallback = () => this.onColorOver(this.blueHover);
		blueHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.blueHover);
		blueHoverSimpleButton.callback = () => this.buy(1);

		// greenHover (components)
		const greenHoverSimpleButton = new SimpleButton(greenHover);
		greenHoverSimpleButton.hoverCallback = () => this.onColorOver(this.greenHover);
		greenHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.greenHover);
		greenHoverSimpleButton.callback = () => this.buy(2);

		// pinkHover (components)
		const pinkHoverSimpleButton = new SimpleButton(pinkHover);
		pinkHoverSimpleButton.hoverCallback = () => this.onColorOver(this.pinkHover);
		pinkHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.pinkHover);
		pinkHoverSimpleButton.callback = () => this.buy(3);

		// peachHover (components)
		const peachHoverSimpleButton = new SimpleButton(peachHover);
		peachHoverSimpleButton.hoverCallback = () => this.onColorOver(this.peachHover);
		peachHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.peachHover);
		peachHoverSimpleButton.callback = () => this.buy(10);

		// brownHover (components)
		const brownHoverSimpleButton = new SimpleButton(brownHover);
		brownHoverSimpleButton.hoverCallback = () => this.onColorOver(this.brownHover);
		brownHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.brownHover);
		brownHoverSimpleButton.callback = () => this.buy(9);

		// purpleHover (components)
		const purpleHoverSimpleButton = new SimpleButton(purpleHover);
		purpleHoverSimpleButton.hoverCallback = () => this.onColorOver(this.purpleHover);
		purpleHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.purpleHover);
		purpleHoverSimpleButton.callback = () => this.buy(8);

		// lightBlueHover (components)
		const lightBlueHoverSimpleButton = new SimpleButton(lightBlueHover);
		lightBlueHoverSimpleButton.hoverCallback = () => this.onColorOver(this.lightBlueHover);
		lightBlueHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.lightBlueHover);
		lightBlueHoverSimpleButton.callback = () => this.buy(12);

		// redHover (components)
		const redHoverSimpleButton = new SimpleButton(redHover);
		redHoverSimpleButton.hoverCallback = () => this.onColorOver(this.redHover);
		redHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.redHover);
		redHoverSimpleButton.callback = () => this.buy(5);

		// orangeHover (components)
		const orangeHoverSimpleButton = new SimpleButton(orangeHover);
		orangeHoverSimpleButton.hoverCallback = () => this.onColorOver(this.orangeHover);
		orangeHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.orangeHover);
		orangeHoverSimpleButton.callback = () => this.buy(6);

		// limeHover (components)
		const limeHoverSimpleButton = new SimpleButton(limeHover);
		limeHoverSimpleButton.hoverCallback = () => this.onColorOver(this.limeHover);
		limeHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.limeHover);
		limeHoverSimpleButton.callback = () => this.buy(13);

		// cyanHover (components)
		const cyanHoverSimpleButton = new SimpleButton(cyanHover);
		cyanHoverSimpleButton.hoverCallback = () => this.onColorOver(this.cyanHover);
		cyanHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.cyanHover);
		cyanHoverSimpleButton.callback = () => this.buy(15);

		// yellowHover (components)
		const yellowHoverSimpleButton = new SimpleButton(yellowHover);
		yellowHoverSimpleButton.hoverCallback = () => this.onColorOver(this.yellowHover);
		yellowHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.yellowHover);
		yellowHoverSimpleButton.callback = () => this.buy(7);

		// whiteHover (components)
		const whiteHoverSimpleButton = new SimpleButton(whiteHover);
		whiteHoverSimpleButton.hoverCallback = () => this.onColorOver(this.whiteHover);
		whiteHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.whiteHover);
		whiteHoverSimpleButton.callback = () => this.buy(16);

		// blackHover (components)
		const blackHoverSimpleButton = new SimpleButton(blackHover);
		blackHoverSimpleButton.hoverCallback = () => this.onColorOver(this.blackHover);
		blackHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.blackHover);
		blackHoverSimpleButton.callback = () => this.buy(4);

		// darkGreenHover (components)
		const darkGreenHoverSimpleButton = new SimpleButton(darkGreenHover);
		darkGreenHoverSimpleButton.hoverCallback = () => this.onColorOver(this.darkGreenHover);
		darkGreenHoverSimpleButton.hoverOutCallback = () => this.onColorOut(this.darkGreenHover);
		darkGreenHoverSimpleButton.callback = () => this.buy(11);

		// secret_bucket_hat (components)
		const secret_bucket_hatSimpleButton = new SimpleButton(secret_bucket_hat);
		secret_bucket_hatSimpleButton.callback = () => this.buy(1196);

		// page2_go (components)
		const page2_goSimpleButton = new SimpleButton(page2_go);
		page2_goSimpleButton.callback = () => super.nextPage();

		// closeBtn_1 (components)
		const closeBtn_1SimpleButton = new SimpleButton(closeBtn_1);
		closeBtn_1SimpleButton.callback = () => super.close();

		// closeBtn_2 (components)
		const closeBtn_2SimpleButton = new SimpleButton(closeBtn_2);
		closeBtn_2SimpleButton.callback = () => super.close();

		// nextPage (components)
		const nextPageSimpleButton = new SimpleButton(nextPage);
		nextPageSimpleButton.callback = () => super.nextPage();

		// prevPage (components)
		const prevPageSimpleButton = new SimpleButton(prevPage);
		prevPageSimpleButton.callback = () => super.prevPage();

		this.blocker = blocker;
		this.page20 = page20;
		this.page21Bg = page21Bg;
		this.closeBtn_3 = closeBtn_3;
		this.lastPagebtn = lastPagebtn;
		this.page19 = page19;
		this.page20_bg = page20_bg;
		this.page20_header = page20_header;
		this.flag_name_7186 = flag_name_7186;
		this.flag_name_7187 = flag_name_7187;
		this.flag_name_7188 = flag_name_7188;
		this.flag_name_7189 = flag_name_7189;
		this.flag_name_7185 = flag_name_7185;
		this.flag_name_7184 = flag_name_7184;
		this.flag_name_7183 = flag_name_7183;
		this.flag_name_7182 = flag_name_7182;
		this.flag_name_7148 = flag_name_7148;
		this.flag_name_504 = flag_name_504;
		this.flag_name_7096 = flag_name_7096;
		this.flag_name_502 = flag_name_502;
		this.flag_name_533 = flag_name_533;
		this.flag_name_514 = flag_name_514;
		this.flag_name_535 = flag_name_535;
		this.flag_name_500 = flag_name_500;
		this.flag_name_505 = flag_name_505;
		this.flag_name_529 = flag_name_529;
		this.flag_name_538 = flag_name_538;
		this.flag_name_507 = flag_name_507;
		this.flag_name_540 = flag_name_540;
		this.flag_name_536 = flag_name_536;
		this.flag_name_506 = flag_name_506;
		this.flag_name_525 = flag_name_525;
		this.flag_name_508 = flag_name_508;
		this.flag_name_530 = flag_name_530;
		this.flag_name_548 = flag_name_548;
		this.flag_name_546 = flag_name_546;
		this.flag_name_542 = flag_name_542;
		this.flag_name_537 = flag_name_537;
		this.flag_name_517 = flag_name_517;
		this.flag_name_526 = flag_name_526;
		this.flag_name_518 = flag_name_518;
		this.flag_name_539 = flag_name_539;
		this.flag_name_513 = flag_name_513;
		this.flag_name_7095 = flag_name_7095;
		this.flag_name_543 = flag_name_543;
		this.flag_name_522 = flag_name_522;
		this.flag_name_547 = flag_name_547;
		this.flag_name_511 = flag_name_511;
		this.flag_name_528 = flag_name_528;
		this.flag_name_534 = flag_name_534;
		this.flag_name_512 = flag_name_512;
		this.flag_name_520 = flag_name_520;
		this.flag_name_545 = flag_name_545;
		this.flag_name_531 = flag_name_531;
		this.flag_name_527 = flag_name_527;
		this.flag_name_524 = flag_name_524;
		this.flag_name_501 = flag_name_501;
		this.flag_name_519 = flag_name_519;
		this.flag_name_541 = flag_name_541;
		this.flag_name_503 = flag_name_503;
		this.flag_name_510 = flag_name_510;
		this.flag_name_509 = flag_name_509;
		this.flag_name_521 = flag_name_521;
		this.flag_name_516 = flag_name_516;
		this.flag_name_544 = flag_name_544;
		this.flag_name_515 = flag_name_515;
		this.flag_name_523 = flag_name_523;
		this.page18 = page18;
		this.page19_bg = page19_bg;
		this.page19_header = page19_header;
		this.buyBtn_1259 = buyBtn_1259;
		this.priceNum_1259 = priceNum_1259;
		this.nameTag_1259 = nameTag_1259;
		this.buyBtn_322 = buyBtn_322;
		this.priceNum_322 = priceNum_322;
		this.nameTag_322 = nameTag_322;
		this.buyBtn_6101 = buyBtn_6101;
		this.priceNum_6101 = priceNum_6101;
		this.nameTag_6101 = nameTag_6101;
		this.buyBtn_4369 = buyBtn_4369;
		this.priceNum_4369 = priceNum_4369;
		this.nameTag_4369 = nameTag_4369;
		this.secret_boombox = secret_boombox;
		this.page17 = page17;
		this.page18_bg = page18_bg;
		this.nameTag_3198 = nameTag_3198;
		this.buyBtn_3198 = buyBtn_3198;
		this.priceNum_3198 = priceNum_3198;
		this.nameTag_5424 = nameTag_5424;
		this.buyBtn_5424 = buyBtn_5424;
		this.priceNum_5424 = priceNum_5424;
		this.nameTag_24044 = nameTag_24044;
		this.buyBtn_24044 = buyBtn_24044;
		this.priceNum_24044 = priceNum_24044;
		this.nameTag_24043 = nameTag_24043;
		this.buyBtn_24043 = buyBtn_24043;
		this.priceNum_24043 = priceNum_24043;
		this.nameTag_1785 = nameTag_1785;
		this.buyBtn_1785 = buyBtn_1785;
		this.priceNum_1785 = priceNum_1785;
		this.nameTag_1786 = nameTag_1786;
		this.buyBtn_1786 = buyBtn_1786;
		this.priceNum_1786 = priceNum_1786;
		this.secret_hawaiian_lei = secret_hawaiian_lei;
		this.page16 = page16;
		this.page17_bg = page17_bg;
		this.page17_header = page17_header;
		this.nameTag_384 = nameTag_384;
		this.buyBtn_384 = buyBtn_384;
		this.priceNum_384 = priceNum_384;
		this.nameTag_6140 = nameTag_6140;
		this.buyBtn_6140 = buyBtn_6140;
		this.priceNum_6140 = priceNum_6140;
		this.nameTag_4235 = nameTag_4235;
		this.buyBtn_4235 = buyBtn_4235;
		this.priceNum_4235 = priceNum_4235;
		this.nameTag_4316 = nameTag_4316;
		this.buyBtn_4316 = buyBtn_4316;
		this.priceNum_4316 = priceNum_4316;
		this.nameTag_1195 = nameTag_1195;
		this.buyBtn_1195 = buyBtn_1195;
		this.priceNum_1195 = priceNum_1195;
		this.nameTag_1525 = nameTag_1525;
		this.buyBtn_1525 = buyBtn_1525;
		this.priceNum_1525 = priceNum_1525;
		this.secret_3d_glasses = secret_3d_glasses;
		this.page15 = page15;
		this.page16_bg = page16_bg;
		this.page16_header = page16_header;
		this.buyBtn_1835 = buyBtn_1835;
		this.priceNum_1835 = priceNum_1835;
		this.nameTag_1835 = nameTag_1835;
		this.buyBtn_5133 = buyBtn_5133;
		this.priceNum_5133 = priceNum_5133;
		this.nameTag_5133 = nameTag_5133;
		this.buyBtn_4638 = buyBtn_4638;
		this.priceNum_4638 = priceNum_4638;
		this.nameTag_4638 = nameTag_4638;
		this.buyBtn_6074 = buyBtn_6074;
		this.priceNum_6074 = priceNum_6074;
		this.nameTag_6074 = nameTag_6074;
		this.page14 = page14;
		this.page15_bg = page15_bg;
		this.page15_header = page15_header;
		this.customHoodie = customHoodie;
		this.hoodie_black = hoodie_black;
		this.hoodie_white = hoodie_white;
		this.hoodie_yellow = hoodie_yellow;
		this.hoodie_orange = hoodie_orange;
		this.hoodie_red = hoodie_red;
		this.hoodie_puffle = hoodie_puffle;
		this.hoodie_stripes = hoodie_stripes;
		this.hoodie_stars = hoodie_stars;
		this.hoodie_splatters = hoodie_splatters;
		this.hoodie_fade = hoodie_fade;
		this.page15_step_1 = page15_step_1;
		this.page15_step_2 = page15_step_2;
		this.page15_step_3 = page15_step_3;
		this.secret_yellow_foam_finger = secret_yellow_foam_finger;
		this.page13 = page13;
		this.page13_bg = page13_bg;
		this.page4_header_1 = page4_header_1;
		this.buyBtn_1853 = buyBtn_1853;
		this.priceNum_1853 = priceNum_1853;
		this.nameTag_1853 = nameTag_1853;
		this.buyBtn_4344 = buyBtn_4344;
		this.priceNum_4344 = priceNum_4344;
		this.nameTag_4344 = nameTag_4344;
		this.buyBtn_4560 = buyBtn_4560;
		this.priceNum_4560 = priceNum_4560;
		this.nameTag_4560 = nameTag_4560;
		this.buyBtn_4561 = buyBtn_4561;
		this.priceNum_4561 = priceNum_4561;
		this.nameTag_4561 = nameTag_4561;
		this.buyBtn_4345 = buyBtn_4345;
		this.priceNum_4345 = priceNum_4345;
		this.nameTag_4345 = nameTag_4345;
		this.page12 = page12;
		this.page12_bg = page12_bg;
		this.buyBtn_6104 = buyBtn_6104;
		this.priceNum_6104 = priceNum_6104;
		this.nameTag_6104 = nameTag_6104;
		this.buyBtn_6220 = buyBtn_6220;
		this.priceNum_6220 = priceNum_6220;
		this.nameTag_6220 = nameTag_6220;
		this.buyBtn_6108 = buyBtn_6108;
		this.priceNum_6108 = priceNum_6108;
		this.nameTag_6108 = nameTag_6108;
		this.buyBtn_6219 = buyBtn_6219;
		this.priceNum_6219 = priceNum_6219;
		this.nameTag_6219 = nameTag_6219;
		this.buyBtn_6106 = buyBtn_6106;
		this.priceNum_6106 = priceNum_6106;
		this.nameTag_6106 = nameTag_6106;
		this.buyBtn_6103 = buyBtn_6103;
		this.priceNum_6103 = priceNum_6103;
		this.nameTag_6103 = nameTag_6103;
		this.buyBtn_6003 = buyBtn_6003;
		this.priceNum_6003 = priceNum_6003;
		this.nameTag_6003 = nameTag_6003;
		this.buyBtn_6004 = buyBtn_6004;
		this.priceNum_6004 = priceNum_6004;
		this.nameTag_6004 = nameTag_6004;
		this.buyBtn_6064 = buyBtn_6064;
		this.priceNum_6064 = priceNum_6064;
		this.nameTag_6064 = nameTag_6064;
		this.buyBtn_6105 = buyBtn_6105;
		this.priceNum_6105 = priceNum_6105;
		this.nameTag_6105 = nameTag_6105;
		this.buyBtn_6107 = buyBtn_6107;
		this.priceNum_6107 = priceNum_6107;
		this.nameTag_6107 = nameTag_6107;
		this.buyBtn_6050 = buyBtn_6050;
		this.priceNum_6050 = priceNum_6050;
		this.nameTag_6050 = nameTag_6050;
		this.secret_black_kicks = secret_black_kicks;
		this.page11 = page11;
		this.page11_bg = page11_bg;
		this.buyBtn_1373 = buyBtn_1373;
		this.priceNum_1373 = priceNum_1373;
		this.nameTag_1373 = nameTag_1373;
		this.buyBtn_1372 = buyBtn_1372;
		this.priceNum_1372 = priceNum_1372;
		this.nameTag_1372 = nameTag_1372;
		this.buyBtn_1371 = buyBtn_1371;
		this.priceNum_1371 = priceNum_1371;
		this.nameTag_1371 = nameTag_1371;
		this.buyBtn_1370 = buyBtn_1370;
		this.priceNum_1370 = priceNum_1370;
		this.nameTag_1370 = nameTag_1370;
		this.buyBtn_4304 = buyBtn_4304;
		this.priceNum_4304 = priceNum_4304;
		this.nameTag_4304 = nameTag_4304;
		this.buyBtn_4303 = buyBtn_4303;
		this.priceNum_4303 = priceNum_4303;
		this.nameTag_4303 = nameTag_4303;
		this.buyBtn_4302 = buyBtn_4302;
		this.priceNum_4302 = priceNum_4302;
		this.nameTag_4302 = nameTag_4302;
		this.buyBtn_4301 = buyBtn_4301;
		this.priceNum_4301 = priceNum_4301;
		this.nameTag_4301 = nameTag_4301;
		this.buyBtn_1844 = buyBtn_1844;
		this.priceNum_1844 = priceNum_1844;
		this.nameTag_1844 = nameTag_1844;
		this.buyBtn_24062 = buyBtn_24062;
		this.priceNum_24062 = priceNum_24062;
		this.nameTag_24062 = nameTag_24062;
		this.buyBtn_1846 = buyBtn_1846;
		this.priceNum_1846 = priceNum_1846;
		this.nameTag_1846 = nameTag_1846;
		this.buyBtn_4811 = buyBtn_4811;
		this.priceNum_4811 = priceNum_4811;
		this.nameTag_4811 = nameTag_4811;
		this.page10 = page10;
		this.page10_bg = page10_bg;
		this.buyBtn_1365 = buyBtn_1365;
		this.priceNum_1365 = priceNum_1365;
		this.nameTag_1365 = nameTag_1365;
		this.buyBtn_1360 = buyBtn_1360;
		this.priceNum_1360 = priceNum_1360;
		this.nameTag_1360 = nameTag_1360;
		this.buyBtn_1361 = buyBtn_1361;
		this.priceNum_1361 = priceNum_1361;
		this.nameTag_1361 = nameTag_1361;
		this.buyBtn_1362 = buyBtn_1362;
		this.priceNum_1362 = priceNum_1362;
		this.nameTag_1362 = nameTag_1362;
		this.buyBtn_315 = buyBtn_315;
		this.priceNum_315 = priceNum_315;
		this.nameTag_315 = nameTag_315;
		this.buyBtn_302 = buyBtn_302;
		this.priceNum_302 = priceNum_302;
		this.nameTag_302 = nameTag_302;
		this.buyBtn_301 = buyBtn_301;
		this.priceNum_301 = priceNum_301;
		this.nameTag_301 = nameTag_301;
		this.buyBtn_3007 = buyBtn_3007;
		this.priceNum_3007 = priceNum_3007;
		this.nameTag_3007 = nameTag_3007;
		this.buyBtn_303 = buyBtn_303;
		this.priceNum_303 = priceNum_303;
		this.nameTag_303 = nameTag_303;
		this.buyBtn_1363 = buyBtn_1363;
		this.priceNum_1363 = priceNum_1363;
		this.nameTag_1363 = nameTag_1363;
		this.buyBtn_3102 = buyBtn_3102;
		this.priceNum_3102 = priceNum_3102;
		this.nameTag_3102 = nameTag_3102;
		this.buyBtn_1364 = buyBtn_1364;
		this.priceNum_1364 = priceNum_1364;
		this.nameTag_1364 = nameTag_1364;
		this.page9 = page9;
		this.page9_bg = page9_bg;
		this.buyBtn_1379 = buyBtn_1379;
		this.priceNum_1379 = priceNum_1379;
		this.nameTag_1379 = nameTag_1379;
		this.buyBtn_1378 = buyBtn_1378;
		this.priceNum_1378 = priceNum_1378;
		this.nameTag_1378 = nameTag_1378;
		this.buyBtn_1377 = buyBtn_1377;
		this.priceNum_1377 = priceNum_1377;
		this.nameTag_1377 = nameTag_1377;
		this.buyBtn_1376 = buyBtn_1376;
		this.priceNum_1376 = priceNum_1376;
		this.nameTag_1376 = nameTag_1376;
		this.buyBtn_4310 = buyBtn_4310;
		this.priceNum_4310 = priceNum_4310;
		this.nameTag_4310 = nameTag_4310;
		this.buyBtn_4309 = buyBtn_4309;
		this.priceNum_4309 = priceNum_4309;
		this.nameTag_4309 = nameTag_4309;
		this.buyBtn_4308 = buyBtn_4308;
		this.priceNum_4308 = priceNum_4308;
		this.nameTag_4308 = nameTag_4308;
		this.buyBtn_4307 = buyBtn_4307;
		this.priceNum_4307 = priceNum_4307;
		this.nameTag_4307 = nameTag_4307;
		this.buyBtn_1375 = buyBtn_1375;
		this.priceNum_1375 = priceNum_1375;
		this.nameTag_1375 = nameTag_1375;
		this.buyBtn_4306 = buyBtn_4306;
		this.priceNum_4306 = priceNum_4306;
		this.nameTag_4306 = nameTag_4306;
		this.buyBtn_1374 = buyBtn_1374;
		this.priceNum_1374 = priceNum_1374;
		this.nameTag_1374 = nameTag_1374;
		this.buyBtn_4305 = buyBtn_4305;
		this.priceNum_4305 = priceNum_4305;
		this.nameTag_4305 = nameTag_4305;
		this.secret_snow_style_jacket = secret_snow_style_jacket;
		this.page8 = page8;
		this.page8Bg = page8Bg;
		this.buyBtn_1368 = buyBtn_1368;
		this.priceNum_1368 = priceNum_1368;
		this.nameTag_1368 = nameTag_1368;
		this.buyBtn_1367 = buyBtn_1367;
		this.priceNum_1367 = priceNum_1367;
		this.nameTag_1367 = nameTag_1367;
		this.buyBtn_1369 = buyBtn_1369;
		this.priceNum_1369 = priceNum_1369;
		this.nameTag_1369 = nameTag_1369;
		this.buyBtn_3107 = buyBtn_3107;
		this.priceNum_3107 = priceNum_3107;
		this.nameTag_3107 = nameTag_3107;
		this.buyBtn_3106 = buyBtn_3106;
		this.priceNum_3106 = priceNum_3106;
		this.nameTag_3106 = nameTag_3106;
		this.buyBtn_3105 = buyBtn_3105;
		this.priceNum_3105 = priceNum_3105;
		this.nameTag_3105 = nameTag_3105;
		this.buyBtn_3205 = buyBtn_3205;
		this.priceNum_3205 = priceNum_3205;
		this.nameTag_3205 = nameTag_3205;
		this.buyBtn_1847 = buyBtn_1847;
		this.priceNum_1847 = priceNum_1847;
		this.nameTag_1847 = nameTag_1847;
		this.buyBtn_3206 = buyBtn_3206;
		this.priceNum_3206 = priceNum_3206;
		this.nameTag_3206 = nameTag_3206;
		this.buyBtn_1366 = buyBtn_1366;
		this.priceNum_1366 = priceNum_1366;
		this.nameTag_1366 = nameTag_1366;
		this.buyBtn_3104 = buyBtn_3104;
		this.priceNum_3104 = priceNum_3104;
		this.nameTag_3104 = nameTag_3104;
		this.buyBtn_1845 = buyBtn_1845;
		this.priceNum_1845 = priceNum_1845;
		this.nameTag_1845 = nameTag_1845;
		this.page7 = page7;
		this.page7Bg = page7Bg;
		this.buyBtn_1841 = buyBtn_1841;
		this.priceNum_1841 = priceNum_1841;
		this.nameTag_1841 = nameTag_1841;
		this.buyBtn_1843 = buyBtn_1843;
		this.priceNum_1843 = priceNum_1843;
		this.nameTag_1843 = nameTag_1843;
		this.buyBtn_1842 = buyBtn_1842;
		this.priceNum_1842 = priceNum_1842;
		this.nameTag_1842 = nameTag_1842;
		this.buyBtn_1840 = buyBtn_1840;
		this.priceNum_1840 = priceNum_1840;
		this.nameTag_1840 = nameTag_1840;
		this.buyBtn_3112 = buyBtn_3112;
		this.priceNum_3112 = priceNum_3112;
		this.nameTag_3112 = nameTag_3112;
		this.buyBtn_3109 = buyBtn_3109;
		this.priceNum_3109 = priceNum_3109;
		this.nameTag_3109 = nameTag_3109;
		this.buyBtn_3114 = buyBtn_3114;
		this.priceNum_3114 = priceNum_3114;
		this.nameTag_3114 = nameTag_3114;
		this.buyBtn_3108 = buyBtn_3108;
		this.priceNum_3108 = priceNum_3108;
		this.nameTag_3108 = nameTag_3108;
		this.buyBtn_3078 = buyBtn_3078;
		this.priceNum_3078 = priceNum_3078;
		this.nameTag_3078 = nameTag_3078;
		this.buyBtn_3113 = buyBtn_3113;
		this.priceNum_3113 = priceNum_3113;
		this.nameTag_3113 = nameTag_3113;
		this.buyBtn_3100 = buyBtn_3100;
		this.priceNum_3100 = priceNum_3100;
		this.nameTag_3100 = nameTag_3100;
		this.buyBtn_3110 = buyBtn_3110;
		this.priceNum_3110 = priceNum_3110;
		this.nameTag_3110 = nameTag_3110;
		this.buyBtn_3115 = buyBtn_3115;
		this.priceNum_3115 = priceNum_3115;
		this.nameTag_3115 = nameTag_3115;
		this.buyBtn_3202 = buyBtn_3202;
		this.priceNum_3202 = priceNum_3202;
		this.nameTag_3202 = nameTag_3202;
		this.buyBtn_3203 = buyBtn_3203;
		this.priceNum_3203 = priceNum_3203;
		this.nameTag_3203 = nameTag_3203;
		this.buyBtn_3111 = buyBtn_3111;
		this.priceNum_3111 = priceNum_3111;
		this.nameTag_3111 = nameTag_3111;
		this.page6 = page6;
		this.page6Bg = page6Bg;
		this.nameTag_6036 = nameTag_6036;
		this.buyBtn_6036 = buyBtn_6036;
		this.priceNum_6036 = priceNum_6036;
		this.nameTag_6112 = nameTag_6112;
		this.buyBtn_6112 = buyBtn_6112;
		this.priceNum_6112 = priceNum_6112;
		this.nameTag_24056 = nameTag_24056;
		this.buyBtn_23056 = buyBtn_23056;
		this.priceNum_24056 = priceNum_24056;
		this.nameTag_24055 = nameTag_24055;
		this.buyBtn_23055 = buyBtn_23055;
		this.priceNum_24055 = priceNum_24055;
		this.nameTag_1836 = nameTag_1836;
		this.buyBtn_1836 = buyBtn_1836;
		this.priceNum_1836 = priceNum_1836;
		this.nameTag_1837 = nameTag_1837;
		this.buyBtn_1837 = buyBtn_1837;
		this.priceNum_1837 = priceNum_1837;
		this.page6_header = page6_header;
		this.secret_blue_skater_hat = secret_blue_skater_hat;
		this.page5 = page5;
		this.page5Bg = page5Bg;
		this.page5_header = page5_header;
		this.buyBtn_1838 = buyBtn_1838;
		this.priceNum_1838 = priceNum_1838;
		this.nameTag_1838 = nameTag_1838;
		this.buyBtn_1839 = buyBtn_1839;
		this.priceNum_1839 = priceNum_1839;
		this.nameTag_1839 = nameTag_1839;
		this.buyBtn_24058 = buyBtn_24058;
		this.priceNum_24058 = priceNum_24058;
		this.nameTag_24058 = nameTag_24058;
		this.buyBtn_24057 = buyBtn_24057;
		this.priceNum_24057 = priceNum_24057;
		this.nameTag_24057 = nameTag_24057;
		this.buyBtn_3200 = buyBtn_3200;
		this.priceNum_3200 = priceNum_3200;
		this.nameTag_3200 = nameTag_3200;
		this.buyBtn_6218 = buyBtn_6218;
		this.priceNum_6218 = priceNum_6218;
		this.nameTag_6218 = nameTag_6218;
		this.page4 = page4;
		this.page4Bg = page4Bg;
		this.rollOverText = rollOverText;
		this.rollOver = rollOver;
		this.page4_header = page4_header;
		this.buyBtn_210 = buyBtn_210;
		this.priceNum_210 = priceNum_210;
		this.nameTag_210 = nameTag_210;
		this.hover_210 = hover_210;
		this.buyBtn_405 = buyBtn_405;
		this.priceNum_405 = priceNum_405;
		this.nameTag_405 = nameTag_405;
		this.hover_405 = hover_405;
		this.buyBtn_717 = buyBtn_717;
		this.priceNum_717 = priceNum_717;
		this.nameTag_717 = nameTag_717;
		this.hover_717 = hover_717;
		this.buyBtn_713 = buyBtn_713;
		this.priceNum_713 = priceNum_713;
		this.nameTag_713 = nameTag_713;
		this.hover_713 = hover_713;
		this.buyBtn_192 = buyBtn_192;
		this.priceNum_192 = priceNum_192;
		this.nameTag_192 = nameTag_192;
		this.hover_192 = hover_192;
		this.buyBtn_203 = buyBtn_203;
		this.priceNum_203 = priceNum_203;
		this.nameTag_203 = nameTag_203;
		this.hover_203 = hover_203;
		this.buyBtn_653 = buyBtn_653;
		this.priceNum_653 = priceNum_653;
		this.nameTag_653 = nameTag_653;
		this.hover_653 = hover_653;
		this.secret_pixel_shades = secret_pixel_shades;
		this.page3 = page3;
		this.page3Bg = page3Bg;
		this.page3_header1 = page3_header1;
		this.cardBgPrice1 = cardBgPrice1;
		this.cardBgCoin1 = cardBgCoin1;
		this.page3_header2 = page3_header2;
		this.cardBgPrice2 = cardBgPrice2;
		this.cardBgCoin2 = cardBgCoin2;
		this.hover_9258 = hover_9258;
		this.hover_9259 = hover_9259;
		this.hover_9254 = hover_9254;
		this.hover_9253 = hover_9253;
		this.hover_9102 = hover_9102;
		this.hover_9014 = hover_9014;
		this.hover_9059 = hover_9059;
		this.hover_9086 = hover_9086;
		this.page2 = page2;
		this.page2Bg = page2Bg;
		this.page2_header = page2_header;
		this.colorsPrice = colorsPrice;
		this.coinPng = coinPng;
		this.blueHover = blueHover;
		this.greenHover = greenHover;
		this.pinkHover = pinkHover;
		this.peachHover = peachHover;
		this.brownHover = brownHover;
		this.purpleHover = purpleHover;
		this.lightBlueHover = lightBlueHover;
		this.redHover = redHover;
		this.orangeHover = orangeHover;
		this.limeHover = limeHover;
		this.cyanHover = cyanHover;
		this.yellowHover = yellowHover;
		this.whiteHover = whiteHover;
		this.blackHover = blackHover;
		this.darkGreenHover = darkGreenHover;
		this.secret_bucket_hat = secret_bucket_hat;
		this.page1 = page1;
		this.page1Bg = page1Bg;
		this.titleText = titleText;
		this.monthText = monthText;
		this.page2_go = page2_go;
		this.closeBtn_1 = closeBtn_1;
		this.buttons = buttons;
		this.closeBtn_2 = closeBtn_2;
		this.coins = coins;
		this.nextPage = nextPage;
		this.prevPage = prevPage;
		this.pages = pages;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	blocker;
	/** @type {Phaser.GameObjects.Container} */
	page20;
	/** @type {Phaser.GameObjects.Image} */
	page21Bg;
	/** @type {Phaser.GameObjects.Ellipse} */
	closeBtn_3;
	/** @type {Phaser.GameObjects.Rectangle} */
	lastPagebtn;
	/** @type {Phaser.GameObjects.Container} */
	page19;
	/** @type {Phaser.GameObjects.Image} */
	page20_bg;
	/** @type {Phaser.GameObjects.Text} */
	page20_header;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_7186;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_7187;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_7188;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_7189;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_7185;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_7184;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_7183;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_7182;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_7148;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_504;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_7096;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_502;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_533;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_514;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_535;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_500;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_505;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_529;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_538;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_507;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_540;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_536;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_506;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_525;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_508;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_530;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_548;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_546;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_542;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_537;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_517;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_526;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_518;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_539;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_513;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_7095;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_543;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_522;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_547;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_511;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_528;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_534;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_512;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_520;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_545;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_531;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_527;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_524;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_501;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_519;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_541;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_503;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_510;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_509;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_521;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_516;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_544;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_515;
	/** @type {Phaser.GameObjects.Text} */
	flag_name_523;
	/** @type {Phaser.GameObjects.Container} */
	page18;
	/** @type {Phaser.GameObjects.Image} */
	page19_bg;
	/** @type {Phaser.GameObjects.Text} */
	page19_header;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1259;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1259;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1259;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_322;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_322;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_322;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_6101;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_6101;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_6101;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_4369;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_4369;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_4369;
	/** @type {Phaser.GameObjects.Rectangle} */
	secret_boombox;
	/** @type {Phaser.GameObjects.Container} */
	page17;
	/** @type {Phaser.GameObjects.Image} */
	page18_bg;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_3198;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_3198;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_3198;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_5424;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_5424;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_5424;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_24044;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_24044;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_24044;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_24043;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_24043;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_24043;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1785;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1785;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1785;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1786;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1786;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1786;
	/** @type {Phaser.GameObjects.Rectangle} */
	secret_hawaiian_lei;
	/** @type {Phaser.GameObjects.Container} */
	page16;
	/** @type {Phaser.GameObjects.Image} */
	page17_bg;
	/** @type {Phaser.GameObjects.Text} */
	page17_header;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_384;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_384;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_384;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_6140;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_6140;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_6140;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_4235;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_4235;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_4235;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_4316;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_4316;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_4316;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1195;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1195;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1195;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1525;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1525;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1525;
	/** @type {Phaser.GameObjects.Rectangle} */
	secret_3d_glasses;
	/** @type {Phaser.GameObjects.Container} */
	page15;
	/** @type {Phaser.GameObjects.Image} */
	page16_bg;
	/** @type {Phaser.GameObjects.Text} */
	page16_header;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1835;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1835;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1835;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_5133;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_5133;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_5133;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_4638;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_4638;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_4638;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_6074;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_6074;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_6074;
	/** @type {Phaser.GameObjects.Container} */
	page14;
	/** @type {Phaser.GameObjects.Image} */
	page15_bg;
	/** @type {Phaser.GameObjects.Text} */
	page15_header;
	/** @type {Phaser.GameObjects.Sprite} */
	customHoodie;
	/** @type {Phaser.GameObjects.Sprite} */
	hoodie_black;
	/** @type {Phaser.GameObjects.Sprite} */
	hoodie_white;
	/** @type {Phaser.GameObjects.Sprite} */
	hoodie_yellow;
	/** @type {Phaser.GameObjects.Sprite} */
	hoodie_orange;
	/** @type {Phaser.GameObjects.Sprite} */
	hoodie_red;
	/** @type {Phaser.GameObjects.Sprite} */
	hoodie_puffle;
	/** @type {Phaser.GameObjects.Sprite} */
	hoodie_stripes;
	/** @type {Phaser.GameObjects.Sprite} */
	hoodie_stars;
	/** @type {Phaser.GameObjects.Sprite} */
	hoodie_splatters;
	/** @type {Phaser.GameObjects.Sprite} */
	hoodie_fade;
	/** @type {Phaser.GameObjects.Text} */
	page15_step_1;
	/** @type {Phaser.GameObjects.Text} */
	page15_step_2;
	/** @type {Phaser.GameObjects.Text} */
	page15_step_3;
	/** @type {Phaser.GameObjects.Rectangle} */
	secret_yellow_foam_finger;
	/** @type {Phaser.GameObjects.Container} */
	page13;
	/** @type {Phaser.GameObjects.Image} */
	page13_bg;
	/** @type {Phaser.GameObjects.Text} */
	page4_header_1;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1853;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1853;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1853;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_4344;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_4344;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_4344;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_4560;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_4560;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_4560;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_4561;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_4561;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_4561;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_4345;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_4345;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_4345;
	/** @type {Phaser.GameObjects.Container} */
	page12;
	/** @type {Phaser.GameObjects.Image} */
	page12_bg;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_6104;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_6104;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_6104;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_6220;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_6220;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_6220;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_6108;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_6108;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_6108;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_6219;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_6219;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_6219;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_6106;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_6106;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_6106;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_6103;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_6103;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_6103;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_6003;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_6003;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_6003;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_6004;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_6004;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_6004;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_6064;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_6064;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_6064;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_6105;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_6105;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_6105;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_6107;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_6107;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_6107;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_6050;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_6050;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_6050;
	/** @type {Phaser.GameObjects.Rectangle} */
	secret_black_kicks;
	/** @type {Phaser.GameObjects.Container} */
	page11;
	/** @type {Phaser.GameObjects.Image} */
	page11_bg;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1373;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1373;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1373;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1372;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1372;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1372;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1371;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1371;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1371;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1370;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1370;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1370;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_4304;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_4304;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_4304;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_4303;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_4303;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_4303;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_4302;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_4302;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_4302;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_4301;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_4301;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_4301;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1844;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1844;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1844;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_24062;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_24062;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_24062;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1846;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1846;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1846;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_4811;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_4811;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_4811;
	/** @type {Phaser.GameObjects.Container} */
	page10;
	/** @type {Phaser.GameObjects.Image} */
	page10_bg;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1365;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1365;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1365;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1360;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1360;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1360;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1361;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1361;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1361;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1362;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1362;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1362;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_315;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_315;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_315;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_302;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_302;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_302;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_301;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_301;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_301;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_3007;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_3007;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_3007;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_303;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_303;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_303;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1363;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1363;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1363;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_3102;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_3102;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_3102;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1364;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1364;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1364;
	/** @type {Phaser.GameObjects.Container} */
	page9;
	/** @type {Phaser.GameObjects.Image} */
	page9_bg;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1379;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1379;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1379;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1378;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1378;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1378;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1377;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1377;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1377;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1376;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1376;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1376;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_4310;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_4310;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_4310;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_4309;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_4309;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_4309;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_4308;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_4308;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_4308;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_4307;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_4307;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_4307;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1375;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1375;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1375;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_4306;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_4306;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_4306;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1374;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1374;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1374;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_4305;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_4305;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_4305;
	/** @type {Phaser.GameObjects.Rectangle} */
	secret_snow_style_jacket;
	/** @type {Phaser.GameObjects.Container} */
	page8;
	/** @type {Phaser.GameObjects.Image} */
	page8Bg;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1368;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1368;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1368;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1367;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1367;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1367;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1369;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1369;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1369;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_3107;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_3107;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_3107;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_3106;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_3106;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_3106;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_3105;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_3105;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_3105;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_3205;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_3205;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_3205;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1847;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1847;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1847;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_3206;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_3206;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_3206;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1366;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1366;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1366;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_3104;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_3104;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_3104;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1845;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1845;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1845;
	/** @type {Phaser.GameObjects.Container} */
	page7;
	/** @type {Phaser.GameObjects.Image} */
	page7Bg;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1841;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1841;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1841;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1843;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1843;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1843;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1842;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1842;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1842;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1840;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1840;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1840;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_3112;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_3112;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_3112;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_3109;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_3109;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_3109;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_3114;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_3114;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_3114;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_3108;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_3108;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_3108;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_3078;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_3078;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_3078;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_3113;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_3113;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_3113;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_3100;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_3100;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_3100;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_3110;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_3110;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_3110;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_3115;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_3115;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_3115;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_3202;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_3202;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_3202;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_3203;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_3203;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_3203;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_3111;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_3111;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_3111;
	/** @type {Phaser.GameObjects.Container} */
	page6;
	/** @type {Phaser.GameObjects.Image} */
	page6Bg;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_6036;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_6036;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_6036;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_6112;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_6112;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_6112;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_24056;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_23056;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_24056;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_24055;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_23055;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_24055;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1836;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1836;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1836;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1837;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1837;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1837;
	/** @type {Phaser.GameObjects.Text} */
	page6_header;
	/** @type {Phaser.GameObjects.Rectangle} */
	secret_blue_skater_hat;
	/** @type {Phaser.GameObjects.Container} */
	page5;
	/** @type {Phaser.GameObjects.Image} */
	page5Bg;
	/** @type {Phaser.GameObjects.Text} */
	page5_header;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1838;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1838;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1838;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_1839;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_1839;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_1839;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_24058;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_24058;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_24058;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_24057;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_24057;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_24057;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_3200;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_3200;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_3200;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_6218;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_6218;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_6218;
	/** @type {Phaser.GameObjects.Container} */
	page4;
	/** @type {Phaser.GameObjects.Image} */
	page4Bg;
	/** @type {Phaser.GameObjects.Text} */
	rollOverText;
	/** @type {Phaser.GameObjects.Sprite} */
	rollOver;
	/** @type {Phaser.GameObjects.Text} */
	page4_header;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_210;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_210;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_210;
	/** @type {Phaser.GameObjects.Rectangle} */
	hover_210;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_405;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_405;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_405;
	/** @type {Phaser.GameObjects.Rectangle} */
	hover_405;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_717;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_717;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_717;
	/** @type {Phaser.GameObjects.Rectangle} */
	hover_717;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_713;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_713;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_713;
	/** @type {Phaser.GameObjects.Rectangle} */
	hover_713;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_192;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_192;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_192;
	/** @type {Phaser.GameObjects.Rectangle} */
	hover_192;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_203;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_203;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_203;
	/** @type {Phaser.GameObjects.Rectangle} */
	hover_203;
	/** @type {Phaser.GameObjects.Sprite} */
	buyBtn_653;
	/** @type {Phaser.GameObjects.Text} */
	priceNum_653;
	/** @type {Phaser.GameObjects.Text} */
	nameTag_653;
	/** @type {Phaser.GameObjects.Rectangle} */
	hover_653;
	/** @type {Phaser.GameObjects.Rectangle} */
	secret_pixel_shades;
	/** @type {Phaser.GameObjects.Container} */
	page3;
	/** @type {Phaser.GameObjects.Image} */
	page3Bg;
	/** @type {Phaser.GameObjects.Text} */
	page3_header1;
	/** @type {Phaser.GameObjects.Text} */
	cardBgPrice1;
	/** @type {Phaser.GameObjects.Image} */
	cardBgCoin1;
	/** @type {Phaser.GameObjects.Text} */
	page3_header2;
	/** @type {Phaser.GameObjects.Text} */
	cardBgPrice2;
	/** @type {Phaser.GameObjects.Image} */
	cardBgCoin2;
	/** @type {Phaser.GameObjects.Rectangle} */
	hover_9258;
	/** @type {Phaser.GameObjects.Rectangle} */
	hover_9259;
	/** @type {Phaser.GameObjects.Rectangle} */
	hover_9254;
	/** @type {Phaser.GameObjects.Rectangle} */
	hover_9253;
	/** @type {Phaser.GameObjects.Rectangle} */
	hover_9102;
	/** @type {Phaser.GameObjects.Rectangle} */
	hover_9014;
	/** @type {Phaser.GameObjects.Rectangle} */
	hover_9059;
	/** @type {Phaser.GameObjects.Rectangle} */
	hover_9086;
	/** @type {Phaser.GameObjects.Container} */
	page2;
	/** @type {Phaser.GameObjects.Image} */
	page2Bg;
	/** @type {Phaser.GameObjects.Text} */
	page2_header;
	/** @type {Phaser.GameObjects.Text} */
	colorsPrice;
	/** @type {Phaser.GameObjects.Image} */
	coinPng;
	/** @type {Phaser.GameObjects.Ellipse} */
	blueHover;
	/** @type {Phaser.GameObjects.Ellipse} */
	greenHover;
	/** @type {Phaser.GameObjects.Ellipse} */
	pinkHover;
	/** @type {Phaser.GameObjects.Ellipse} */
	peachHover;
	/** @type {Phaser.GameObjects.Ellipse} */
	brownHover;
	/** @type {Phaser.GameObjects.Ellipse} */
	purpleHover;
	/** @type {Phaser.GameObjects.Ellipse} */
	lightBlueHover;
	/** @type {Phaser.GameObjects.Ellipse} */
	redHover;
	/** @type {Phaser.GameObjects.Ellipse} */
	orangeHover;
	/** @type {Phaser.GameObjects.Ellipse} */
	limeHover;
	/** @type {Phaser.GameObjects.Ellipse} */
	cyanHover;
	/** @type {Phaser.GameObjects.Ellipse} */
	yellowHover;
	/** @type {Phaser.GameObjects.Ellipse} */
	whiteHover;
	/** @type {Phaser.GameObjects.Ellipse} */
	blackHover;
	/** @type {Phaser.GameObjects.Ellipse} */
	darkGreenHover;
	/** @type {Phaser.GameObjects.Rectangle} */
	secret_bucket_hat;
	/** @type {Phaser.GameObjects.Container} */
	page1;
	/** @type {Phaser.GameObjects.Image} */
	page1Bg;
	/** @type {Phaser.GameObjects.Text} */
	titleText;
	/** @type {Phaser.GameObjects.Text} */
	monthText;
	/** @type {Phaser.GameObjects.Rectangle} */
	page2_go;
	/** @type {Phaser.GameObjects.Ellipse} */
	closeBtn_1;
	/** @type {Phaser.GameObjects.Container} */
	buttons;
	/** @type {Phaser.GameObjects.Ellipse} */
	closeBtn_2;
	/** @type {Phaser.GameObjects.Text} */
	coins;
	/** @type {Phaser.GameObjects.Rectangle} */
	nextPage;
	/** @type {Phaser.GameObjects.Rectangle} */
	prevPage;
	/** @type {Phaser.GameObjects.Container[]} */
	pages;

	/* START-USER-CODE */

	create() {
        super.create();

		this.setCoins(this.world.client.coins)
	}

	// Hoodie

	onCustomHoodieOver(button){
		button.alpha = 1
	}

	onCustomHoodieOut(button){
		button.alpha = 0.01
	}

	color = "black"
	pattern = "fade"
	hoodie = 4495

	changeColor(newColor){
		this.color = newColor
		this.changeHoodie()
	}

	changePattern(newPattern){
		this.pattern = newPattern
		this.changeHoodie()
	}

	changeHoodie(){

		if (this.color == "black"){
			if (this.pattern == "fade"){
				this.customHoodie.setFrame("customHoodie0001")
				this.hoodie = 4495
			}
			else if (this.pattern == "splatters"){
				this.customHoodie.setFrame("customHoodie0002")
				this.hoodie = 4582
			}
			else if (this.pattern == "stars"){
				this.customHoodie.setFrame("customHoodie0003")
				this.hoodie = 4583
			}
			else if (this.pattern == "stripes"){
				this.customHoodie.setFrame("customHoodie0004")
				this.hoodie = 4584
			}
			else if (this.pattern == "puffle"){
				this.customHoodie.setFrame("customHoodie0005")
				this.hoodie = 4585
			}
		}
		else if (this.color == "white"){
			if (this.pattern == "fade"){
				this.customHoodie.setFrame("customHoodie0006")
				this.hoodie = 4500
			}
			else if (this.pattern == "splatters"){
				this.customHoodie.setFrame("customHoodie0007")
				this.hoodie = 4586
			}
			else if (this.pattern == "stars"){
				this.customHoodie.setFrame("customHoodie0008")
				this.hoodie = 4587
			}
			else if (this.pattern == "stripes"){
				this.customHoodie.setFrame("customHoodie0009")
				this.hoodie = 4588
			}
			else if (this.pattern == "puffle"){
				this.customHoodie.setFrame("customHoodie0010")
				this.hoodie = 4589
			}
		}
		else if (this.color == "yellow"){
			if (this.pattern == "fade"){
				this.customHoodie.setFrame("customHoodie0011")
				this.hoodie = 4591
			}
			else if (this.pattern == "splatters"){
				this.customHoodie.setFrame("customHoodie0012")
				this.hoodie = 4590
			}
			else if (this.pattern == "stars"){
				this.customHoodie.setFrame("customHoodie0013")
				this.hoodie = 4592
			}
			else if (this.pattern == "stripes"){
				this.customHoodie.setFrame("customHoodie0014")
				this.hoodie = 4593
			}
			else if (this.pattern == "puffle"){
				this.customHoodie.setFrame("customHoodie0015")
				this.hoodie = 4594
			}
		}
		else if (this.color == "orange"){
			if (this.pattern == "fade"){
				this.customHoodie.setFrame("customHoodie0016")
				this.hoodie = 4596
			}
			else if (this.pattern == "splatters"){
				this.customHoodie.setFrame("customHoodie0017")
				this.hoodie = 4595
			}
			else if (this.pattern == "stars"){
				this.customHoodie.setFrame("customHoodie0018")
				this.hoodie = 4597
			}
			else if (this.pattern == "stripes"){
				this.customHoodie.setFrame("customHoodie0019")
				this.hoodie = 4598
			}
			else if (this.pattern == "puffle"){
				this.customHoodie.setFrame("customHoodie0020")
				this.hoodie = 4599
			}
		}
		else if (this.color == "red"){
			if (this.pattern == "fade"){
				this.customHoodie.setFrame("customHoodie0021")
				this.hoodie = 4601
			}
			else if (this.pattern == "splatters"){
				this.customHoodie.setFrame("customHoodie0022")
				this.hoodie = 4600
			}
			else if (this.pattern == "stars"){
				this.customHoodie.setFrame("customHoodie0023")
				this.hoodie = 4602
			}
			else if (this.pattern == "stripes"){
				this.customHoodie.setFrame("customHoodie0024")
				this.hoodie = 4603
			}
			else if (this.pattern == "puffle"){
				this.customHoodie.setFrame("customHoodie0025")
				this.hoodie = 4604
			}
		}
	}

	buyHoodie(){
		this.buy(this.hoodie)
	}

	onColorOver(color){
		color.isStroked = true
	}

	onColorOut(color){
		color.isStroked = false
	}

	rollover(frame){
    	this.rollOver.setFrame(frame)
	}

	onBgOver(button){
		button.fillAlpha = 0.2
	}

	onBgOut(button){
		button.fillAlpha = 0.01
	}

	pricetag(id){
		if(this.crumbs.items[id]){
			return(this.crumbs.items[id].cost)
		}
		else{
			console.log("error with " +  id)
		}
	}

	nametag(id){
		if(this.crumbs.items[id]){
			return(this.crumbs.items[id].name)
		}
		else{
			console.log("error with " +  id)
		}
	}

    setCoins(coins) {
        this.coins.text = `YOUR COINS:\n${coins}`
    }

    buy(item) {
        this.interface.prompt.showItem(item)
		//console.log("bought " + item)
    }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

//export default ClothingCatalog
