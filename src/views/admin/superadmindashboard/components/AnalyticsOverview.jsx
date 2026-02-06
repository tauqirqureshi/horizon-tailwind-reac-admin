import Chart from "react-apexcharts";

const AnalyticsOverview = () => {
  const chartOptions = {
    chart: { toolbar: { show: false } },
    stroke: { curve: "smooth" },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    colors: ["#2563eb", "#16a34a", "#f59e0b"],
  };

  const series = [
    { name: "Active Users", data: [120, 150, 210, 280, 310, 340] },
    { name: "Organizations", data: [60, 72, 88, 97, 110, 124] },
    { name: "Revenue ($K)", data: [220, 260, 310, 380, 420, 482] },
  ];

  return (
    <div className="rounded-2xl border bg-white p-6">
      <h2 className="mb-4 text-lg font-semibold">Platform Analytics</h2>
      <Chart options={chartOptions} series={series} type="line" height={320} />
    </div>
  );
};

export default AnalyticsOverview;
