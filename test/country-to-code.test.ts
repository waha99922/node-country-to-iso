import { countryToAlpha2 } from "../src/country-to-code";

describe("Providing non-strings/short strings", () => {
  it("empty string", () => {
    expect(countryToAlpha2("")).toBe(null);
  });

  it("X", () => {
    expect(countryToAlpha2("X")).toBe(null);
  });

  it("null", () => {
    expect(countryToAlpha2(null)).toBe(null);
  });

  it("undefined", () => {
    expect(countryToAlpha2(undefined)).toBe(null);
  });

  it("123", () => {
    expect(countryToAlpha2(123)).toBe(null);
  });
});

describe("Providing ISO 3166-1 alpha-2", () => {
  it("GB = GB", () => expect(countryToAlpha2("GB")).toBe("GB"));
  it("US = US", () => expect(countryToAlpha2("US")).toBe("US"));
  it("XX = null", () => expect(countryToAlpha2("XX")).toBe(null));
});

describe("Providing ISO 3166-1 alpha-3", () => {
  it("GBR = GB", () => expect(countryToAlpha2("GBR")).toBe("GB"));
  it("USA = US", () => expect(countryToAlpha2("USA")).toBe("US"));
  it("XXX = null", () => expect(countryToAlpha2("XXX")).toBe(null));
});

describe("GB variants", () => {
  it("Great Britain", () => {
    expect(countryToAlpha2("Great Britain")).toBe("GB")
  });

  it("UK", () => {
    expect(countryToAlpha2("UK")).toBe("GB")
  });

  it("United Kingdom", () => {
    expect(countryToAlpha2("United Kingdom")).toBe("GB")
  });

  it("United Kingdom of Great Britain", () => {
    expect(countryToAlpha2("United Kingdom of Great Britain")).toBe("GB")
  });

  it("United Kingdom of Great Britain & Northern Ireland", () => {
    expect(countryToAlpha2("United Kingdom of Great Britain & Northern Ireland")).toBe("GB")
  });

  it("United Kingdom of Great Britain and Northern Ireland", () => {
    expect(countryToAlpha2("United Kingdom of Great Britain and Northern Ireland")).toBe("GB")
  });
});

describe("US variants", () => {
  it("US", () => {
    expect(countryToAlpha2("US")).toBe("US")
  });

  it("USA", () => {
    expect(countryToAlpha2("USA")).toBe("US")
  });

  it("U S A", () => {
    expect(countryToAlpha2("U S A")).toBe("US")
  });

  it("U.S.A", () => {
    expect(countryToAlpha2("U.S.A")).toBe("US")
  });

  it("US of A", () => {
    expect(countryToAlpha2("US of A")).toBe("US")
  });

  it("US and A", () => {
    expect(countryToAlpha2("US and A")).toBe("US")
  });

  it("United States", () => {
    expect(countryToAlpha2("United States")).toBe("US")
  });

  it("United States of America", () => {
    expect(countryToAlpha2("United States of America")).toBe("US")
  });

  it("America", () => {
    expect(countryToAlpha2("America")).toBe("US")
  });
});

describe("Republic of Korea variants", () => {
  it("Korea, Republic of", () => {
    expect(countryToAlpha2("Korea, Republic of")).toBe("KR")
  });

  it("Korea (Republic of)", () => {
    expect(countryToAlpha2("Korea (Republic of)")).toBe("KR")
  });

  it("Republic of Korea", () => {
    expect(countryToAlpha2("Republic of Korea")).toBe("KR")
  });

  it("South Korea", () => {
    expect(countryToAlpha2("South Korea")).toBe("KR")
  });
});

describe("Hong Kong variants", () => {
  it("HKSAR", () => {
    expect(countryToAlpha2("HKSAR")).toBe("HK")
  });

  it("Hong Kong", () => {
    expect(countryToAlpha2("Hong Kong")).toBe("HK")
  });

  it("Hong Kong SAR China", () => {
    expect(countryToAlpha2("Hong Kong SAR China")).toBe("HK")
  });
});
