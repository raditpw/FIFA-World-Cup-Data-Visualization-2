// ============================================================
// THE FIFA WORLD CUP — chart loading script
// Author: Raditya Wardhana — FIT2179 Data Visualisation 2026
// Each chart will be added here using the pattern from Week 7 studio:
//   vegaEmbed("#div_id", "path/to/chart.vg.json");
// ============================================================

// (charts will be added here as we build them)

const opt = { renderer: "svg", actions: true };

vegaEmbed("#chart_history_map", "js/history_map.vg.json", opt);
vegaEmbed("#chart_attendance", "js/attendance.vg.json", opt);
vegaEmbed("#chart_countries_map", "js/countries_map.vg.json", opt);
vegaEmbed("#chart_socceroos", "js/socceroos.vg.json", opt);
vegaEmbed("#chart_socceroos_radar", "js/socceroos_radar.vg.json", opt);
vegaEmbed("#chart_matildas", "js/matildas.vg.json", opt);
vegaEmbed("#chart_matildas_radar", "js/matildas_radar.vg.json", opt);
vegaEmbed("#chart_brazil", "js/brazil.vg.json", opt);
vegaEmbed("#chart_pele", "js/pele.vg.json", opt);
vegaEmbed("#chart_klose", "js/klose.vg.json", opt);
vegaEmbed("#chart_forlan", "js/forlan.vg.json", opt);
vegaEmbed("#chart_2026", "js/road2026.vg.json", opt);