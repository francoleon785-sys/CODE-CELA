module.exports = {
  ci: {
    collect: {
      url: [
        "http://localhost:8080/",
        "http://localhost:8080/404.html"
      ],
      numberOfRuns: 2,
      startServerCommand: "python3 -m http.server 8080",
      allowedTrafficHosts: ["localhost"]
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.95 }],
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["error", { minScore: 0.95 }],
        "categories:seo": ["error", { minScore: 0.95 }],
        "first-contentful-paint": ["warn", { maxNumericValue: 2500 }],
        "cumulative-layout-shift": ["error", { maxNumericValue: 0.1 }],
        "elements-on-screen-if-no-javascript": ["warn", { minPercentage: 0.8 }]
      }
    },
    upload: { target: "temporary-public-storage" }
  }
};
