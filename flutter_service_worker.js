'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "75da86f75cbef8c9f9bb6fc022dec016",
"version.json": "014ea6bcca449b013075fb3581415911",
"index.html": "d83b08b6e733fa465f5f296b062d2d77",
"/": "d83b08b6e733fa465f5f296b062d2d77",
"main.dart.js": "65ba25a538fe7a02cc94d467ed3c6829",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c613bc6cdaa1234d4141f157ed74ffca",
"assets/AssetManifest.json": "2d9d07fe403bda755d28ef9f3c6d3c21",
"assets/NOTICES": "42bb45bbda79611b91e6be0254b2d011",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "c88d15781f5b2ec617aa59ab959f148f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7a2206c161f15f6b9d14054cfdd207ce",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/background/languange.svg": "8d707efdce3934e7413ce975573c9ad1",
"assets/assets/background/appbar1.svg": "45c85c0be3fdb35ca7e056f7eb8cabfb",
"assets/assets/background/bg_mmoney.svg": "ed24612fdcd5f6b347443267487d4ff3",
"assets/assets/concert1.png": "45c4f414b40ed9d4f89f5497b6ba7cd8",
"assets/assets/home.svg": "ed76a6f2fa19ea09298c38bc877078a2",
"assets/assets/otp.svg": "9901ecb9d3549434e23049d863320431",
"assets/assets/ticket.svg": "6c2b965c022ea1226948a6450d8712a7",
"assets/assets/logox.png": "9ec236e17ca6bccf6090e4c9f37d20b7",
"assets/assets/otp.png": "5445a6bf4a89ab53caf1dc898cb3205f",
"assets/assets/loading.gif": "56c9a5f03b777718189fab17389bafbe",
"assets/assets/checked.png": "4cd0d106fbbd473e6ef6e0b995bac6d7",
"assets/assets/userProfile.svg": "5d5fab78e38228eb942eb8c366331e95",
"assets/assets/image/bg_gradient2.svg": "7ad36c2dfbf63d9181bb2105121a1437",
"assets/assets/image/bg_gradient3.svg": "5fbba597770c5f3448f0bde372b9bcd2",
"assets/assets/image/bg_gradient1.svg": "e13fdee0bf22eb81aa18e5e6b86df681",
"assets/assets/image/fire.png": "94c825042d36dea8cacc6bb014e9d2fb",
"assets/assets/image/banner.jpg": "4c518a765e44dcd553b503f10c3c63a5",
"assets/assets/image/recom2.jpg": "66adfd8e7799108bdee9dc399233a958",
"assets/assets/image/recom1.jpg": "80b4a1b72e8b5fa86e132713fefd6db7",
"assets/assets/image/credit_card.png": "fd779287835d48742f0dc9afb9523602",
"assets/assets/image/bg_gradient3.png": "b66978f85fc3ebb8a88cdc68eca3a963",
"assets/assets/image/wallet.svg": "c379e1c065238ea6638004f5131a339d",
"assets/assets/image/crown1.png": "bfb36add5163caac0a0c855a4cbaad86",
"assets/assets/image/grandienthome.png": "fea654a8a899cf36accec0d115dbe958",
"assets/assets/image/line-01.svg": "eb983609f9416e55a6f69c4290633875",
"assets/assets/image/userlotto.png": "722dadd4cc3136b28047f6150fe77d5e",
"assets/assets/image/logo.png": "6289e3d94198f70659c81ba100fb9e79",
"assets/assets/image/merchant.webp": "9580da46e9dfe04cf6aa9cd370a4d34d",
"assets/assets/image/credit-card.png": "3d35f6e135b8b18d16581da4edc21fa2",
"assets/assets/image/moreop1.jpg": "b2afa59cf98937d83830985b5b3c5fea",
"assets/assets/image/moreop3.jpg": "7d1c15d073f3db4de063dfbc48d30d1a",
"assets/assets/image/moreop2.jpg": "e7fa9988450f01d85b34aa8678280150",
"assets/assets/image/2.png": "a2fc8076172e687549b3ba0359a285ba",
"assets/assets/image/logo_color.png": "3d9c9afb6dc5f498cd4087348392ebcc",
"assets/assets/image/crown.png": "2ebb3158b114382834d258bc45d565c4",
"assets/assets/image/3.png": "ff02b69234e51320c29ac34e92fd64c2",
"assets/assets/image/package_bg.png": "c32ceaa3e0c4dfa4dedf996b1b8004d8",
"assets/assets/image/1.png": "f92e10a7c7537d0ffaf77dd813f0349e",
"assets/assets/logo_mmoney_circle.png": "ddcc58e62a3baf1d92d2396903b2ff77",
"assets/assets/logo_merchant_circle.png": "197586b7e402fba4772d2cbe34c24c22",
"assets/assets/locals/zh-CN.json": "655016690492306031f7e2fcdc02e15e",
"assets/assets/locals/lo.json": "e4f1398ead6c2348c38cc9e30517c38a",
"assets/assets/locals/en-US.json": "32638a06f7f8333e20b20af49362a6c4",
"assets/assets/locals/vi-VN.json": "1880be968704ac33414ae9d0513ede7b",
"assets/assets/avatarProfile.png": "56152b538bf0efdf8cae523945f452e1",
"assets/assets/logo_mmoney.png": "e8baea8c2ea96a0bb0ab5f22b9f9fd02",
"assets/assets/profile.png": "ee326d80730989df5bccc47335b26fc8",
"assets/assets/bg01.png": "d1c25581faf3054eb4640f5dfd7001c4",
"assets/assets/lottie/success_lottie.json": "6da1df4cda5e25239c2b05512d307abb",
"assets/assets/lottie/creditcard.json": "de398e2cf77d53b089b61faf2916d75c",
"assets/assets/lottie/QRpayment.json": "fd177caf7df34f592af4ab291cd10a22",
"assets/assets/logo_mmoney.svg": "62ca517acb533edd3f002aa2282d400d",
"assets/assets/icon/logo_x.png": "5c97c264e0fcbe8f3a9e47d1ea4bc85c",
"assets/assets/icon/search.svg": "86bea99bd49ebf482cf26e89ad7a8eb4",
"assets/assets/icon/ic_wetv.png": "c170eafe14ada117408314d43d14f574",
"assets/assets/icon/ic_share.svg": "a0c3ee141d1d9f2304a61d7f792c3714",
"assets/assets/icon/dialog_success.svg": "100b6ab4a99e7ab680eb101507d7d962",
"assets/assets/icon/ic_logout_setting.svg": "bc27cd17d595c5479a17b9789c410f46",
"assets/assets/icon/ic_profile.svg": "d940a681fd80c2add691b2a7dbb103b9",
"assets/assets/icon/ic_box_open_bg.png": "77e7474736269f5b3b00243c3fed4291",
"assets/assets/icon/removeX.svg": "995664be771e7e7823ca6f8ba9360548",
"assets/assets/icon/icinfo_more.svg": "914f822cb058fe6653c0eaa3d2cdd5b6",
"assets/assets/icon/ic_otp.png": "decabdd7e047a5693b637a0eab09e99a",
"assets/assets/icon/ic_voucher.svg": "8cfbfde93a4b108c757253d19442ce98",
"assets/assets/icon/img.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icon/LogoLTR.png": "bcb89fb55245ce8775eccfd46d142db7",
"assets/assets/icon/result.svg": "3e78066e6478cf25943887cb17b6e66c",
"assets/assets/icon/ic_delete.svg": "2219463b71d34bb22627a8af3d90600e",
"assets/assets/icon/ic_heart_grey.svg": "d37ff12bd933349c3469037215feb079",
"assets/assets/icon/ic_calendar.png": "6d0b106e092637dcce2112feb14e3a52",
"assets/assets/icon/ic_info.svg": "a54513326324f46d48c8bf8ad1e07ae0",
"assets/assets/icon/recurbill_circle.png": "130c70f801e8b413a729d8ac5878208b",
"assets/assets/icon/SCN.png": "e614994e52b733c3fc142aac94cc4a28",
"assets/assets/icon/credit_card.svg": "7def2000eb34b0b21ada0ade3fbda640",
"assets/assets/icon/logo_thanks.jpg": "7d9bb3061c986041bb1fd40549c77768",
"assets/assets/icon/his_elec.svg": "fde0c1ffeca8f8bd2b72b83acca8862a",
"assets/assets/icon/his_cashin.svg": "dee1bd5e4b01834e174af14dc37fd6b6",
"assets/assets/icon/ic_share_circle.svg": "9cabe51ab4213398a562be7ff75fd141",
"assets/assets/icon/bgCongrat.png": "6c997dd091ac0db1c56b60164cd43c18",
"assets/assets/icon/paw.svg": "6323df9729a95d07e48bf3b6fe5c17d7",
"assets/assets/icon/img_verify.svg": "e9651ec81f5458fde1d54572bf5f6898",
"assets/assets/icon/dialog_warning_green.svg": "eebbce082ebc48291226208ce416d6df",
"assets/assets/icon/ic_heart.svg": "7d030eb081f8b79ca99bf8db89b57918",
"assets/assets/icon/his_cashout.svg": "cce0e5ecfee1c5be092255aa79610c52",
"assets/assets/icon/his_default.svg": "df398092608e18c858dfd4afbd77ace8",
"assets/assets/icon/LogoMMoneyLite_L6.jpg": "04de5a3ff1bf8e3cf5ecc67aca3dffc6",
"assets/assets/icon/ic_user.svg": "f04da5823de341e9500d9375e67fa71a",
"assets/assets/icon/ic_speaker.svg": "24605e5149433ca8be122b5f7a1508d9",
"assets/assets/icon/ic_language.svg": "8d707efdce3934e7413ce975573c9ad1",
"assets/assets/icon/ic_link_circle.svg": "2dde3f50530fb3e1af4c4bd4db9541a3",
"assets/assets/icon/nav_setting.svg": "27266369c701f195ec3fe2b68abcc6a9",
"assets/assets/icon/lao_lottery.png": "aa7a478c5ae73894c6229c0c6eb936a7",
"assets/assets/icon/ic_gift_bg.svg": "7b5ff297868fff9b7747ab946d340086",
"assets/assets/icon/ic_face.svg": "bd6401382255371d0bb19598222cae9c",
"assets/assets/icon/ic_football.svg": "08e1f27ef3766938b88c187cd269f4d8",
"assets/assets/icon/ic_ok_cricle.png": "fb9bfd4580e8e718e81b388538fa3b85",
"assets/assets/icon/log-out.svg": "eae245dcfb6b1cf9a999f7c46286423f",
"assets/assets/icon/his_lotto.svg": "fecf3090ec87432e62d4b0130fc351e7",
"assets/assets/icon/flag_vietnames.svg": "1ae724fe12304dcd0b292493d994f4cb",
"assets/assets/icon/ic_crown.svg": "1dd736a7ad0663b2c0676c1a5f53e1c6",
"assets/assets/icon/mmoney.png": "cf3b9f26a7665335d9aa4f8a5042b3ad",
"assets/assets/icon/cart.svg": "07cc6cfb4547e87f116243de747e6256",
"assets/assets/icon/ic_notification.svg": "658f0665d8fec1aa2f5d2c9880ba044e",
"assets/assets/icon/ic_info.png": "2d2ed8184912e9439267cade2f2ebc25",
"assets/assets/icon/ic_logo_scanpay.svg": "467acfdca0a3802a5d48ed94a028cc5b",
"assets/assets/icon/img_verify_card.svg": "be07898bc968b394648e7043c7a635da",
"assets/assets/icon/correct.svg": "6f1e7662f06f5dcb6687a060e9c16190",
"assets/assets/icon/flag_lao.svg": "1014cf526a5d0716d7de01e6901aec89",
"assets/assets/icon/dialog_warning_red.svg": "02c30b7e4bfb4461169d3ba739e47be1",
"assets/assets/icon/logox_slip.svg": "3a651da791f7c60bce89eef76659363d",
"assets/assets/icon/lmm_red.svg": "25cc9668caba1489891f11d45c6b408d",
"assets/assets/icon/inbox_new.svg": "5f9da496da2d5a1d9e71526deb4ca406",
"assets/assets/icon/ic_bin.svg": "f7714ce8639fcdf32942f567f7b8dbc4",
"assets/assets/icon/ic_mlite.svg": "1a5e14aba09cec3f9d50a3e397c0e3e0",
"assets/assets/icon/inbox_read.svg": "ecb430e5687614e9597dd4324b678e59",
"assets/assets/icon/his_leasing.svg": "6600b181752407e2f61c706b50fb8091",
"assets/assets/icon/LogoMX.png": "31358ccccf9a90a0e487aa4bca09de10",
"assets/assets/icon/flag_ch.svg": "10f80b98cdfc4ace05acc0fb2ccafc29",
"assets/assets/icon/scan.svg": "767193b1cefd97151e0ce68954cbe84f",
"assets/assets/icon/logo_hi.png": "64b81041001456e66a115896d47b5944",
"assets/assets/icon/ic_bill_link.png": "73e9f38dc58761fe5d36d13ce0cc4520",
"assets/assets/icon/cat.png": "1c99f45078133ae584db81a5d06c75ed",
"assets/assets/icon/crown.svg": "e8b91755e4da2ec011e00bade9876370",
"assets/assets/icon/random.png": "6c55be432dc4342915e52f70fc793801",
"assets/assets/icon/notification.svg": "43f3d7cb4f73b51ce94cace376b910cf",
"assets/assets/icon/logo_x_no_bg.png": "7d2e2f2148d939fe668878cedb3ceda8",
"assets/assets/icon/ic_logo_x.svg": "879d4ad2b0b62ba8e29addc79cfc53d8",
"assets/assets/icon/ic_shared.svg": "d5b17e1b8d381bda1951d8555a2ca220",
"assets/assets/icon/bg_gd_profile.svg": "8b8eb7534ce67a3e0b92dde4ae1d2a33",
"assets/assets/icon/ic_info_setting.svg": "d4fa20149b706b02eba854e45c6e2bf1",
"assets/assets/icon/bgg_nopic.svg": "aad1057d38e5752f7641ccf357ae8b37",
"assets/assets/icon/his_mobile.svg": "e4aa427449c2d0b3294129c8bdff2848",
"assets/assets/icon/trash.svg": "b1c2ecb29e5ede22e52f11794134ae46",
"assets/assets/icon/incorrect.svg": "ec04a85d272b2561df72eefa962ad622",
"assets/assets/icon/medal.png": "3cee48ef1e5fc2b3755e422af724f65f",
"assets/assets/icon/nav_home.svg": "6388baa3122caba24a70f5d059be8f38",
"assets/assets/icon/img_bgCard.svg": "bac8b9e57b19e41de7eb3f9ff6ccda2a",
"assets/assets/icon/his_water.svg": "b007d377902ecb87b272ed28658e2288",
"assets/assets/icon/ic_check.svg": "40efe8d49477e67bf558b3cdac9d0536",
"assets/assets/icon/gift.png": "2f73dff2614c29f9f99607573c837a95",
"assets/assets/icon/subBG.png": "49aa8e83a3684254f7abe4ab5058b055",
"assets/assets/icon/iconLogo.png": "9e88ed7278114cc9babfb53fa996b135",
"assets/assets/icon/ic_lock_grey.svg": "8f0ecfc08d46b20c57fb398b0b4227ec",
"assets/assets/icon/ic_download_circle.svg": "7baaf07a0922d616bcb4ce6245d59daf",
"assets/assets/icon/ic_wallet.svg": "14222e863113e84cf5e6e5cc961e7033",
"assets/assets/icon/calendar2.svg": "86bff37406c172afe99506fedc61087f",
"assets/assets/icon/ic_check_verify.svg": "ad7c789bb0524b94adeefcf19299946e",
"assets/assets/icon/his_fee.svg": "2aa6bed231ce78abbbc42320188b7563",
"assets/assets/icon/ic_moneyx_logo.svg": "656f542d08e529b418a53186686890a0",
"assets/assets/icon/his_scan.svg": "53044c545ff497fea83af0d3dcd29b10",
"assets/assets/icon/ic_wallet.png": "063b903f0df4a5fb1c8bd6df66a994b8",
"assets/assets/icon/ic_coin.svg": "4d68c6b04a842d13ba94a3019e32ba1e",
"assets/assets/icon/subBG.svg": "8480f8814ace1ad0dc403f506ef1d67c",
"assets/assets/icon/ic_scan.svg": "8c74d89b79b327bbd96e668b92f3ea98",
"assets/assets/icon/calendar.svg": "0b5c84dbd814f053c13828c0167bbb19",
"assets/assets/icon/ic_contact.svg": "d5ab31c13c50760aa717c8253f321e5d",
"assets/assets/icon/ic_gift_circle.svg": "52cf42f3076618b213781d610038a174",
"assets/assets/icon/ic_service.svg": "99eac600f061f01b04cb524a3402f1c3",
"assets/assets/icon/nav_service.svg": "3894c3cd8307dd5be09a7ef218e62455",
"assets/assets/icon/logo_x_white.png": "ae34ba701280804c25b296668047a738",
"assets/assets/icon/ic_gift1.png": "50490cbff607735300bdeb4f9feb5d93",
"assets/assets/icon/removeC.svg": "f029718b729b7af09d0daceee65ad22f",
"assets/assets/icon/flag_usa.svg": "958d0da9c3e5807e89bd0d11c8baee2a",
"assets/assets/icon/borderKing.png": "2ebb3158b114382834d258bc45d565c4",
"assets/assets/icon/notice_box_empty.svg": "eab61ed4a569553b12576b81a728924b",
"assets/assets/icon/random.svg": "cd425effdd0e2eff60f1bc3a0bb18a01",
"assets/assets/icon/crown.png": "80ad14732970fa41de40b309a4f3714d",
"assets/assets/icon/cat.svg": "30b1fff61a299333fcb42055de2cc4ad",
"assets/assets/icon/foot_cat.png": "f1b8372a2a631500422eff931f4c033f",
"assets/assets/icon/logox_linenum.svg": "47addf422142df1f398c73c9db4cadf7",
"assets/assets/icon/ic_transfer_updown.svg": "784111cde1ab0ea3449f5f2092c4952b",
"assets/assets/icon/history.svg": "ac9f0068c802be6f9a0512c346b6d7d7",
"assets/assets/icon/his_bank.svg": "26ce46a7399fee4fcbd74a4f91c2bf28",
"assets/assets/icon/time2.svg": "be6efd96eca84fee4cc7008a18940144",
"assets/assets/icon/bg.png": "2f8bb62a40e052edccf61a0691a3c93b",
"assets/assets/icon/logo_ok.png": "d296c8955a6206a81e4da49f289be203",
"assets/assets/icon/logo_ok.jpg": "0b149aa57dbbd2186089314ca5aeaa2d",
"assets/assets/logo_merchant.svg": "2ae9a964fad102b25ddd329fcf2dd3c7",
"assets/assets/water.svg": "20b10089e460cd06f791c0ab6c67f828",
"assets/assets/logo_mmoney1.svg": "89b85486eaca784c4578011b7fc62b81",
"assets/assets/boarding/contact.svg": "a7a234e3b1966a5cd095de02b324b193",
"assets/assets/boarding/start.svg": "409b0a121f9c6d4da4754cea16d2fbb6",
"assets/assets/boarding/camera_qr.svg": "729aec45d559f4c98ed72a3bb0eef57c",
"assets/assets/boarding/noti.svg": "a49d913ac6041f17e7467bec468df2b2",
"assets/assets/boarding/location.svg": "e1f1b47afa9e486f5d01cfdd2dde8dfe",
"assets/assets/banner03.jpg": "021b78f205a947659e813b1d4baf264e",
"assets/assets/translations/lo.json": "e4f1398ead6c2348c38cc9e30517c38a",
"assets/assets/translations/en-US.json": "32638a06f7f8333e20b20af49362a6c4",
"assets/assets/banner02.jpg": "c0321eb4f9a3a02de006d923612b31c3",
"assets/assets/lottery/ka_pu.png": "d8e69f8def1d712ad5284af65a4ecc4d",
"assets/assets/lottery/meo_par.png": "d3a00bcb05260d8e529db6a3573b514d",
"assets/assets/lottery/sing.png": "f07a7014358decc8d7f409ca6a8704da",
"assets/assets/lottery/karng_kae.png": "f81d544a90f72eef7b8f33c9586113ce",
"assets/assets/lottery/men.png": "080319ec7cbef16559c8015a103014d3",
"assets/assets/lottery/harn.png": "4ecd9a605c7eec5514dd653c92774230",
"assets/assets/lottery/hoi.png": "a7cab9b93afb222713591346c9b375a7",
"assets/assets/lottery/suea.png": "0ad75223758648049df7ca7adcacbbb3",
"assets/assets/lottery/nok.png": "5e608e3023b36413fa34b98bba0f6080",
"assets/assets/lottery/mu.png": "1f0569ffe0c4a33bce3f963a5d3378f9",
"assets/assets/lottery/kuang.png": "50a50d15249c2d3c6f22b3dd4c522ab8",
"assets/assets/lottery/in_see.png": "2e07771b73a3f140cc741cea31a62ae5",
"assets/assets/lottery/ma.png": "40c6cfc28c615ca3c4dadbc494041472",
"assets/assets/lottery/leo.png": "09e67660585dd798c805d5f6c18022fb",
"assets/assets/lottery/01.png": "527b4fb91410487bc357f806cda62b12",
"assets/assets/lottery/mar.png": "98b07cdba8b988c6ed64571537aa2a4e",
"assets/assets/lottery/03.png": "49d0f1bc9456e92940adf4ea38e62bcc",
"assets/assets/lottery/xarng.png": "994bc0e8c675debf93adbbf580591089",
"assets/assets/lottery/lin.png": "9476b182ada1f46489681487586574bb",
"assets/assets/lottery/02.png": "1e097478c144212e695f88382ea9e11b",
"assets/assets/lottery/Khuay.png": "ee2dc0a640e7d3b4367e430fc46eaf72",
"assets/assets/lottery/pa_yai.png": "9269c8514bbd988b0ed5465f55cfab4d",
"assets/assets/lottery/06.png": "7c2bfe91925bd65b5329c63a9d7f425b",
"assets/assets/lottery/ngu.png": "6fc034a57aba88022d2eb625d5c8cbd1",
"assets/assets/lottery/pa_noy.png": "bd1bf0572935039979195471745a50be",
"assets/assets/lottery/07.png": "21635454d7d37f2d3066687ff52f2470",
"assets/assets/lottery/05.png": "8773e804c43f1f82eccd680fbab69aca",
"assets/assets/lottery/04.png": "b564ad823c0dab9db5107f02d06156fd",
"assets/assets/lottery/09.png": "64e8e16656805777ec68ca6d59ca35d0",
"assets/assets/lottery/khee_khep.png": "64ea10c842247fb1e2ff54e5fafe99ff",
"assets/assets/lottery/kai.png": "5eefa1ec08808707b2615a11d9a1b975",
"assets/assets/lottery/eien.png": "b5cd6e3a13f6859ad3d1a4232970eb63",
"assets/assets/lottery/08.png": "9fc3d19fe1048a90bde3cfa2e9ea1c18",
"assets/assets/lottery/mang_moum.png": "50f07f1ebe4fc59cd60fc82b4e36d6c2",
"assets/assets/lottery/nok_yarng.png": "99433e73e47de44520b7a2740899b3e9",
"assets/assets/lottery/nark_nam.png": "dabdf853aa00e077f450faac95dc8d69",
"assets/assets/lottery/tao.png": "b56b87456fc839fc7f2e1e638440d276",
"assets/assets/lottery/ngen.png": "72ed28091b822592cc9e1fa56b49aa50",
"assets/assets/lottery/pherng.png": "c1ea635930da6abffd484e796f0ca09f",
"assets/assets/lottery/kop.png": "920452620a94b80d5ffb5712a8eae4ad",
"assets/assets/lottery/ka_buea.png": "daeaa3129158c194dfe7914480de3277",
"assets/assets/lottery/koung.png": "744975b4de7a3b5fac2bd1e9877f92d9",
"assets/assets/lottery/ka_taiy.png": "983bc1402a259b4e607e6bd896aeaf67",
"assets/assets/lottery/ling.png": "acfe1a856fb60e49a67382bff2e3639c",
"assets/assets/lottery/nok_young.png": "12d23489aa45fe878a609bcf8d2530aa",
"assets/assets/lottery/nu.png": "4e791370b1bf1ae60273bf37cfd9abda",
"assets/assets/lottery/bae.png": "b952ba01e77518fd34d282db36ab2c80",
"assets/assets/lottery/meo_barn.png": "16b069fa9008b74b5d1d1f9785e14bec",
"assets/assets/lottery/nark_bin.png": "188002f7910a751b290687fedd646aa9",
"assets/assets/banner00.jpg": "bcf88bb3af1e99ff499470e66185a541",
"assets/assets/banner01.jpg": "dcc8d624301c53c4a343169fe4ae4817",
"assets/assets/concert2.jpeg": "5f0a374483a0392c914d34e1c541212b",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
