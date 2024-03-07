setTimeout("$('.body').css('transform','translateY(0)');", 1e3), setTimeout("$('.main-desc').addClass('b-show')", 1500), setTimeout("$('body').addClass('add-scroll')", 3e3), setTimeout("$('html').addClass('add-scroll')", 3e3), $(".glow-button").on("click", function() {
    $(".comment-item").addClass("comment-item-show"), $(".glow-button").addClass("hide"), $(".shine-button").addClass("show")
});
const OFFER = "«Oculus Vision»";
let now = new Date,
    mm = now.getMonth() + 1,
    day = now.getDate(),
    year = now.getFullYear(),
    date = day + "." + mm + "." + year;
const massange = [{
    m: "<img src=img/about-ava-8b4-arb.jpg class=product-img style=width: 100%; max-width: 240px;>مرحبًا! اسمي الدكتور محمد فريد. أنا طبيب عيون ، مختص  في تشخيص  وبحث مشاكل  العيون."
}, {
    m: " أقوم بالتشخيص مجاناً للمشاركة  في حملة تهدف إلى تحسين صحة العيون في العالم . هذه فرصة فريدة للحصول على أحدث الطرق للتخلص من مشاكل العيون و الوقاية من مشاكل  العيون. و أنا هنا لتوفير  لك الوصول إلى أحدث وأكثر الطرق  فعالية للتخلص من مشاكل العيون ."
}, {
    m: "لفهم حالتك بالتفصيل وتحديد أفضل مسار للتخلص من مشاكلك للعيون .  دعني أطرح عليك الأسئلة التالية:"
}, {
    m: '<img src=img/blurred-vision-city-sidewalk.jpg class=product-img style=width: 100%; max-width: 240px;> <p class="quest">هل لاحظت تدهورًا في الرؤية خلال الأيام الماضية ؟  </p>'
}, {
    m: '<img src=img/no-e1559388743907.jpg class=product-img style=width: 100%; max-width: 240px;><p class="quest">هل تعاني من الانزعاج أو الألم في عينيك أثناء القراءة أو العمل على الكمبيوتر؟ </p>'
}, {
    m: '<img src=img/Plavuchie-pomutneniya.jpg class=product-img style=width: 100%; max-width: 240px;><p class="quest">هل واجهت ظهور نقاط عائمة أو وميض في العينين؟  </p>'
}, {
    m: '<p class="quest">هل تدخن؟</p>'
}, {
    m: '<p class="quest">كم عمرك؟</p>'
}, {
    m: ' <img src=img/8.jpg class=product-img style=width: 100%; max-width: 240px;> <p class="quest"> هل واجهت مؤخرًا حساسية مفرطة للضوء أوصداع؟ </p>'
}, {
    m: '<img src=img/translated_image_ar.png class=product-img style=width: 100%; max-width: 240px;> <p class="quest">هل تواجه مشاكل في الرؤية ليلاً ؟  </p>'
}, {
    m: "وفقًا لإجاباتك .  يعمل نظرك بنسبة 50٪ / 100٪ .  ومع التقدم في السن، قد تتسبب هذه النتائج في مشاكل في عمل الأعصاب البصرية حتى الفقدان الكامل للبصر. "
}, {
    m: "في عام 2023، سُجِّلَ عدد كبير من حالات أمراض العيون.  حيث تشير الإحصائيات إلى ما يلي:</br>- المياه البيضاء: لدى  نحو 30٪ من السكان الذين تتجاوز أعمارهم 50 عامًا.</br>- الجلوكوما: تم تشخيصها لدى 15٪ من الأشخاص البالغين الذين تتجاوز أعمارهم 40 عامًا.</br>- الاعتلال الشبكي السكري: تم اكتشافه لدى 20٪ من المصابين بالسكري.</br>- قصر النظر وطول النظر : تؤثر على 25٪ من الأطفال والمراهقين.</br>- متلازمة العين الجافة: تم تسجيلها لدى 10٪ من الناس  الذين يعملون على الحاسوب."
}, {
    m: "<img src=img/prod.png class=product-img style=width: 100%; max-width: 240px;> Oculus Vision يقدم حلاً واعدًا يحارب هذه المشكلات الشائعة في الرؤية. يساعد هذا المكمل الغذائي  على تحسين الدورة الدموية في العين، وهو حل  طبيعي و  حاسم للتخلص  والوقاية من حالات مثل المياه البيضاء والزرق"
}, { 
    m: " كما أنه يدعم صحة الشبكية، مما يجعله فعالًا في الوقاية التخلص من  اعتلال الشبكية السكري. Oculus Vision يوفر أيضًا حلولًا لتحسين الرؤية للأطفال والمراهقين الذين يعانون من قصر النظر وطول النظر، و هو مرطباً  ومغذيًا للعيون، مما يساعد على إبطاء تقدم هذه المشاكل بالعين . هذا المنتج  يخفف أيضًا من أعراض متلازمة العين الجافة، موفرًا الراحة لمن يقضون وقتًا طويلًا أمام الشاشات."
}, {
    m: "في أوائل العقد الأول من الألفية، اكتشف علماؤنا أن العديد من مشاكل الرؤية تنشأ بشكل حصري بسبب عدم كفاية تدفق الدم في كرة العين لتزويد العدسة والصلبة والقرنية بالمواد الضرورية. إذا تم التغلب على هذا السبب الجذري، فحينها  تجنب العمليات الجراحية باهظة الثمن."
}, {
    m: "<img src=img/2.png class=product-img style=width: 100%; max-width: 240px;>  الوظيفة الرئيسية لهذا المكمل الغذائي هي إنشاء نسيج جديد لاستبدال الأنسجة التالفة وزيادة تدفق الدم إلى العين. دورة  واحدة كافية لتنشيط أكثر من 930,000 خلية، تشارك مباشرة في عملية تحسين الرؤية."
}, {
    m: "أنصحكم  بـ Oculus Vision بسبب فعاليته المثبتة والتقييمات الإيجابية من جميع من إستخدموه . أبلغني  أكثر من 87٪ من مرضاي اللذين إستخدموا المنتج  عن تحسن كبير في حالتهم. في الأسبوع الثاني بعد استخدام Oculus Vision، يبدأ الأشخاص في ملاحظة تحسن في الرؤية."
},  {
    m: " <img src=img/1.png class=product-img style=width: 100%; max-width: 240px;> تصبح الصور أكثر وضوحًا، وتحسن التركيز، وتقل الاحمرار والإرهاق. بالإضافة إلى ذلك، على عكس المنتجات الكيميائية الضارة، لا يؤثر Oculus Vision سلبًا على الأوعية الدموية الدقيقة في كرة العين."
},  {
    m: "نأخذ   بعين الاعتبار انه منتج طبيعي 100% و لذلك ليس له أضرار على العين و لا يوجد منه أي مخاوف ."
}, {
    m: 'بالإضافة إلى فعاليته المثبتة والموافقة ضمن المعايير الوطنية للجودة، يتميز  "Oculus Vision" بتركيبته الفريدة. نحن نقدر قيمة المكونات الطبيعية ونسعى إلى استخدام قوة الطبيعة في هذا المنتج . و هو بالفعل يحتوي  على مكونات مثل:</br>مستخلص اللوتين	</br>السيليكا الغروية	 </br>ستيرات المغنيسيوم	'
}, {
    m: 'هذا المنتج  لا يساعدك في التخلص من  الأعراض فحسب، بل يدعم الصحة العامة للعيون، معتمدًا على المكونات الطبيعية في تصنيعه و بالمناسبة تم تصنيعه في الجزائر ويجمع بين التطورات العلمية الحديثة والمعرفة التقليدية القيمة .'
}, {
    m: "تم بذل  كل جهد ممكن لجعل Oculus Vision متاحًا لجميع من يحتاجونه في الجزائر - كل ما عليكم فعله هو المشاركة في المسابقة بالأسفل و هي مسابقة مقدمة من الشركة المصنعة للمكمل الغذائي .  وبعد ذلك ستظهر نسبة الخصم الخاصة بكم و إذا كنت محظوظاً سوف تتمكن من الحصول على تخفيض بنسبة 65% ، ثم  بعد ذلك سيظهر لك نموذج الطلب الرسمي."
}, {
    m: " يتعين عليكم ملء نموذج الطلب الرسمي بعد الحصول على التخفيض الخاص بكم :فقط بكتابة  اسمكم ورقم هاتفكم وانتظار مكالمة من المتخصص من الشركة المصنعة في الجزائر .  الذي سيجيب على جميع أسئلتكم ويوصل المنتج إلى باب منزلكم. لا تنسوا الدفع عند الاستلام."
},  {
    m: "تبلغ المدة المثالية لإستخدام هذا المكمل الغذائي ، والتي تأخذ في الاعتبار عمرك  الحالي واسلوب حياتك ، في المتوسط حوالي 60 يومًا."
}];
   
var mass_id = 0,
    length_mass = 0,
    lengt_num_mas = 0,
    text = "",
    speedtext = 1,
    process = !0;

function app() {
    var e = new Date,
        s = ("0" + e.getMinutes()).slice(-2),
        t = ("0" + e.getHours()).slice(-2) + ":" + s;
    if ($(".chat").height() + 100 > $(".content").height()) {
        $("#scroll_id").removeClass("hide");
        var n = $(".inp").val();
        $(".inp").val(++n)
    }
    const c = '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="message-time" id="time">' + t + '</p><p class="text" id="mass' + mass_id + '"></p></div></div></div>';
    $(".chat-content-list").append(c), "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
}

function myMassange(e) {
    var s = new Date,
        t = ("0" + s.getMinutes()).slice(-2);
    let n = '<div class="chat-content-item user item-active"><div class="chat-content-desc"><div class="chat-content-desc-item user"><p class="message-time" id="time">' + (("0" + s.getHours()).slice(-2) + ":" + t) + '</p><p class="text" class="users_mass">' + e + "</p></div></div></div>";
    $(".chat-content-list").append(n), $(".content").animate({
        scrollTop: $(".chat-content-list").height()
    }, 700), $("#scroll_id").addClass("hide")
}

function question1() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question1M">   نادراً</span></div><div class="chat-content-buttons-gender-block"><span class="question1W">أحياناً</span></div><div class="chat-content-buttons-gender-block"><span class="question1P">لا</span></div><div class="chat-content-buttons-gender-block"><span class="question1T">نعم</span></div></div>')
}

function choise1() {
    $(".question1M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نادراً"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question1W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أحياناً"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question1P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("لا"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question1T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نعم"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question2() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question2M">نادراً</span></div><div class="chat-content-buttons-gender-block"><span class="question2W">أحياناً</span></div><div class="chat-content-buttons-gender-block"><span class="question2P">لا</span></div><div class="chat-content-buttons-gender-block"><span class="question2T">نعم</span></div></div>')
}

function choise2() {
    $(".question2M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نادراً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question2W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أحياناً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question2P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("لا "), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question2T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نعم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question3() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question3M">نادراً</span></div><div class="chat-content-buttons-gender-block"><span class="question3W">أحياناً</span></div><div class="chat-content-buttons-gender-block"><span class="question3P">لا </span></div><div class="chat-content-buttons-gender-block"><span class="question3T">نعم</span></div></div>')
}
function choise3() {
    $(".question3M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نادراً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question3W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أحياناً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question3P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("لا "), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question3T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نعم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question4() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question4M">نادراً</span></div><div class="chat-content-buttons-gender-block"><span class="question4W">أحياناً</span></div><div class="chat-content-buttons-gender-block"><span class="question4P">لا </span></div><div class="chat-content-buttons-gender-block"><span class="question4T">نعم</span></div></div>')
}

function choise4() {
    $(".question4M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نادراً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question4W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أحياناً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question4P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("لا "), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question4T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نعم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question5() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question5M">أقل من 20 عاماً</span></div><div class="chat-content-buttons-gender-block"><span class="question5W">من 20 - 30 عاماً</span></div><div class="chat-content-buttons-gender-block"><span class="question5P">من 31 - 40 عاماً</span></div><div class="chat-content-buttons-gender-block"><span class="question5T">من 41 - 50 عاماً</span></div><div class="chat-content-buttons-gender-block"><span class="question5G">أكثر من 50 عاماً</span></div></div>')
}

function choise5() {
    $(".question5M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أقل من 20 عاماً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question5W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 20 - 30 عاماً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question5P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 31 - 40 عاماً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question5T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 41 - 50 عاماً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question5G").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أكثر من 50 عاماً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question6() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question6M">نادراً</span></div><div class="chat-content-buttons-gender-block"><span class="question6W">أحياناً</span></div><div class="chat-content-buttons-gender-block"><span class="question6P">لا </span></div><div class="chat-content-buttons-gender-block"><span class="question6T">نعم</span></div></div>')
}

function choise6() {
    $(".question6M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نادراً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question6W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أحياناً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question6P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("لا "), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question6T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نعم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}
function question7() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question7M">نادراً</span></div><div class="chat-content-buttons-gender-block"><span class="question7W">أحياناً</span></div><div class="chat-content-buttons-gender-block"><span class="question7P">لا </span></div><div class="chat-content-buttons-gender-block"><span class="question7T">نعم</span></div></div>')
}
function choise7() {
    $(".question7M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نادراً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question7W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أحياناً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question7P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("لا "), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question7T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نعم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}
setTimeout(() => {
    var e = new Date,
        s = ("0" + e.getMinutes()).slice(-2);
    const t = '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="message-time" id="time">' + (("0" + e.getHours()).slice(-2) + ":" + s) + '</p><p class="text" id="mass' + mass_id + '"></p></div></div></div>';
    $(".chat-content-list").append(t), $("#scroll_id").click(function(e) {
        $(this).removeClass("hide-q"), $(".content").animate({
            scrollTop: $(".chat").height()
        }, 700)
    });
    const n = setInterval(function() {
        if (1 == process)
            if (lengt_num_mas != massange.length) {
                if (text += massange[lengt_num_mas].m[length_mass], length_mass++, $("#mass" + lengt_num_mas).html(text), 3 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question1(), process = !1, choise1(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 4 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question2(), process = !1, choise2(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 5 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question3(), process = !1, choise3(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 6 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question4(), process = !1, choise4(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 7 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question5(), process = !1, choise5(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 8 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question6(), process = !1, choise6(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 9 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question7(), process = !1, choise7(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), length_mass == massange[lengt_num_mas].m.length) {
                    lengt_num_mas++, mass_id++, length_mass = 0, text = "", app()
                }
            } else clearInterval(n), $("#mass" + lengt_num_mas).parent().parent().css("display", "none"), $(".iframe-form").addClass("show"), $(".btn-top").addClass("show"), $(".reviews").removeClass("hide")
    }, speedtext)
}, 1e3), $(".content").scroll(function() {
    "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
});
var $marker = $("#down-box");
$(".content").scroll(function() {
    $(".content").scrollTop() + $(".content").height() >= $(".chat").height() + 100 ? (document.getElementById("res").value = "0", $("#scroll_id").addClass("hide")) : $("#scroll_id").removeClass("hide")
});
