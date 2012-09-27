$(document).ready(init);

function init() {

    $("input.line").click(function () {
        $.plot(
            $("#flot-example-1"),
            [
                {
                    label: "Apples",
                    data: [[0, 0], [1, 1], [2, 1], [3, 2]],
                    lines: { show: true },
                    points: { show: true }
                },
                {
                    label: "Oranges",
                    data: [[0, 3], [1, 5], [2, 8], [3, 13]],
                    lines: { show: true },
                    points: { show: true }
                }
            ]
        );
    });

    $("input.bar").click(function() {

        $.plot(
            $("#flot-example-1"),
            [
                {
                    label: "Llama Wool Production Per Year (Bales)",
                    data: [[2011, 450], [2012, 550], [2013, 320], [2014, 700]],
                    bars: {
                        show: true,
                        barWidth: 0.5,
                        align: "center"
                    }
                }
            ],
            {
                xaxis: {
                    ticks: [
                        [2011, "2011"], [2012, "2012"], [2013, "2013"], [2014, "2014"]
                    ]
                }
            }
        );
    });
}