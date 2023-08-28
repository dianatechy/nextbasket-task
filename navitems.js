const mappings = new Map();
mappings.set('startHeader', "startNavItem");
mappings.set('step1Header', "step1NavItem");
mappings.set('step2Header', "step2NavItem");
mappings.set('step3Header', "step3NavItem");
mappings.set('step4Header', "step4NavItem");
mappings.set('step5Header', "step5NavItem");
mappings.set('step6Header', "step6NavItem");
mappings.set('step7Header', "step7NavItem");
mappings.set('step8Header', "step8NavItem");
mappings.set('step9Header', "step9NavItem");
mappings.set('step10Header', "step10NavItem");
mappings.set('step11Header', "step11NavItem");
mappings.set('videoGuideHeader', "videoGuideNavItem");

function makeActiveNavLink(elementId) {
    const previousActive = document.getElementsByClassName("nav-link active");
    for (let i = 0; i < previousActive.length; i++) {
        previousActive[i].className = "nav-link";
    }
    document.getElementById(elementId).className = "nav-link active";
}

var observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting === true) {
        console.log('Element is fully visible in screen', entries[0]);
        makeActiveNavLink(mappings.get(entries[0].target.id));
    }
}, { threshold: [1] });

observer.observe(document.querySelector("#startHeader"));
observer.observe(document.querySelector("#step1Header"));
observer.observe(document.querySelector("#step2Header"));
observer.observe(document.querySelector("#step3Header"));
observer.observe(document.querySelector("#step4Header"));
observer.observe(document.querySelector("#step5Header"));
observer.observe(document.querySelector("#step6Header"));
observer.observe(document.querySelector("#step7Header"));
observer.observe(document.querySelector("#step8Header"));
observer.observe(document.querySelector("#step9Header"));
observer.observe(document.querySelector("#step10Header"));
observer.observe(document.querySelector("#step11Header"));
observer.observe(document.querySelector("#videoGuideHeader"));