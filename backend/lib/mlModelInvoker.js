export const scanWithMLModel = async (input) => {
    // Simulate result
    return {
      result: Math.random() > 0.5 ? 'malicious' : 'benign',
      confidence: Math.random().toFixed(2)
    };
  };