const ScoreBadge = ({ label, value }) => {
  return (
    <div className="flex flex-col items-center bg-gray-50 rounded-xl px-4 py-3 shadow-sm">
      <span className="text-xs text-gray-500 font-semibold uppercase">
        {label}
      </span>
      <span className="text-xl font-bold text-indigo-600">
        {value}
      </span>
    </div>
  );
};



const AnalyticsPanel = ({ analytics,descriptions, loading, error }) => {
  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
        <p className="text-gray-500 text-sm">
          Analyzing descriptions using AI...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
        <p className="text-red-600 text-sm">
          {error}
        </p>
      </div>
    );
  }

  if (!analytics || !descriptions || descriptions.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          AI Description Analytics
        </h3>
        <p className="text-sm text-gray-500">
          No analysis available yet. Analyze at least one description.
        </p>
      </div>
    );
  }

  const bestIndex = descriptions.findIndex(
    (d) => d.id === analytics.best_description_id
  );

  const bestNumber = bestIndex !== -1 ? bestIndex + 1 : "N/A";


  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800">
          AI Description Analytics
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Performance analysis powered by LLM
        </p>
      </div>

      {/* Averages */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <ScoreBadge label="Quality" value={analytics.averages.quality} />
        <ScoreBadge label="SEO" value={analytics.averages.seo} />
        <ScoreBadge label="Engagement" value={analytics.averages.engagement} />
        <ScoreBadge label="Conversion" value={analytics.averages.conversion} />
        <ScoreBadge label="Overall" value={analytics.averages.overall} />
      </div>

      {/* Best Description */}
      <div className="mb-6">
        <p className="text-sm text-green-700 font-semibold">
          🏆 Best Performing Description :{" "}
          <span className="font-bold">
            #{bestNumber}
          </span>
        </p>
      </div>

      {/* Rankings */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase">
          Rankings
        </h4>

        <div className="space-y-3">
          {analytics.rankings.map((item, index) => {
            const descNumber =
              descriptions.findIndex((d) => d.id === item.id) + 1;

            return (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    #{index + 1} — Description #{descNumber}
                  </p>
                  <p className="text-xs text-gray-500">
                    Quality: {item.quality_score} · SEO: {item.seo_score} ·
                    Engagement: {item.engagement_score} · Conversion: {item.conversion_score}
                  </p>
                </div>

                <span className="text-lg font-bold text-indigo-600">
                  {item.overall_score}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPanel;
