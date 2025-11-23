export const codeSnippets = {
  python: {
    'reverse': `def reverse_string(s):\n    """Reverse a string."""\n    return s[::-1]\n\n# Example usage\nresult = reverse_string("hello")\nprint(result)  # Output: olleh`,
    'fibonacci': `def fibonacci(n):\n    """Generate Fibonacci sequence up to n terms."""\n    fib = [0, 1]\n    for i in range(2, n):\n        fib.append(fib[i-1] + fib[i-2])\n    return fib[:n]\n\n# Example\nprint(fibonacci(10))`,
    'sort': `def bubble_sort(arr):\n    """Sort array using bubble sort."""\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n    return arr`,
    'default': `def process_data(data):\n    """Process the input data."""\n    result = []\n    for item in data:\n        if isinstance(item, str):\n            result.append(item.upper())\n        else:\n            result.append(item * 2)\n    return result`
  },
  javascript: {
    'reverse': `function reverseString(str) {\n  // Reverse a string\n  return str.split('').reverse().join('');\n}\n\n// Example usage\nconst result = reverseString("hello");\nconsole.log(result); // Output: olleh`,
    'fibonacci': `function fibonacci(n) {\n  // Generate Fibonacci sequence\n  const fib = [0, 1];\n  for (let i = 2; i < n; i++) {\n    fib[i] = fib[i - 1] + fib[i - 2];\n  }\n  return fib.slice(0, n);\n}\n\nconsole.log(fibonacci(10));`,
    'sort': `function bubbleSort(arr) {\n  // Bubble sort implementation\n  const n = arr.length;\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < n - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\n      }\n    }\n  }\n  return arr;\n}`,
    'default': `function processData(data) {\n  // Process input data\n  return data.map(item => {\n    if (typeof item === 'string') {\n      return item.toUpperCase();\n    }\n    return item * 2;\n  });\n}`
  },
  c: {
    'reverse': `#include <stdio.h>\n#include <string.h>\n\nvoid reverseString(char* str) {\n    int n = strlen(str);\n    for (int i = 0; i < n/2; i++) {\n        char temp = str[i];\n        str[i] = str[n-i-1];\n        str[n-i-1] = temp;\n    }\n}\n\nint main() {\n    char str[] = "hello";\n    reverseString(str);\n    printf("%s\\n", str);\n    return 0;\n}`,
    'fibonacci': `#include <stdio.h>\n\nvoid fibonacci(int n) {\n    int a = 0, b = 1, next;\n    for (int i = 0; i < n; i++) {\n        printf("%d ", a);\n        next = a + b;\n        a = b;\n        b = next;\n    }\n}\n\nint main() {\n    fibonacci(10);\n    return 0;\n}`,
    'sort': `#include <stdio.h>\n\nvoid bubbleSort(int arr[], int n) {\n    for (int i = 0; i < n-1; i++) {\n        for (int j = 0; j < n-i-1; j++) {\n            if (arr[j] > arr[j+1]) {\n                int temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n        }\n    }\n}`,
    'default': `#include <stdio.h>\n\nint processNumber(int num) {\n    return num * num;\n}\n\nint main() {\n    int result = processNumber(5);\n    printf("Result: %d\\n", result);\n    return 0;\n}`
  }
};