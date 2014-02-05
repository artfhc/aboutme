(function($, window, document) {
    if (($ || null) == null) return;
    $(document).ready(function() {
        var titles = {
            sublime: 'Code Editing',
            eclipse: 'Java/J2EE,Android,RIM',
            xcode: 'iOS',
            maven: 'Dependency management and build system for Java project',
            pod: 'Dependency management for Objective-C project',
            bower: 'Package Management for front-end',
            npm: 'Node Package Management',
            tomcat: 'Deployment and Production server for Web Application',
            downloadIcon: 'Click to download my resume in PDF'
        };
        $('a[data-toggle=tooltip]').each(function() {
            var $this = $(this);
            $this.tooltip({
                title: titles[$(this).attr('id')],
                placement: 'right',
                html: true
            });
        });
        $('body').scrollspy({
            target: '.scrollspy',
            offset: 49
        });

        $('nav.nav li a').click(function(event) {
            event.preventDefault();
            // $($(this).attr('href'))[0].scrollIntoView();
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 47
            }, 300);
            // scrollBy(0, -49);
        });

        var data = {
            labels: ["English", "Cantonese", "Mandarin", "Japanese"],
            datasets: [{
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                data: [65, 59, 90, 81]
            }, {
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19]
            }, {
                fillColor: "rgba(157,187,127,0.5)",
                strokeColor: "rgba(157,187,127,1)",
                data: [28, 48, 40, 19]
            }, {
                fillColor: "rgba(125,79,109,0.5)",
                strokeColor: "rgba(125,79,109,1)",
                data: [28, 48, 40, 19]
            }]
        };

        new Chart(document.getElementById("langGraph").getContext("2d")).Bar(data, {
            scaleShowLabels: false,
            pointLabelFontSize: 10
        });
    });
}(jQuery, window, document));