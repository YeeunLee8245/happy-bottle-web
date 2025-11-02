import stylistic from '@stylistic/eslint-plugin';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      // @stylistic 포맷팅 규칙들 (.prettierrc 설정 기반)
      '@stylistic/semi': ['error', 'always'], // semi: true
      '@stylistic/quotes': ['error', 'single'], // singleQuote: true
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/max-len': [
        'error',
        {
          code: 80,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
          ignoreComments: false,
        },
      ],
      '@stylistic/indent': ['error', 2],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/jsx-closing-bracket-location': ['error', 'line-aligned'],
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/quote-props': ['error', 'as-needed'],

      // 추가 스타일 규칙들
      '@stylistic/comma-spacing': [
        'error',
        { before: false, after: true },
      ],
      '@stylistic/key-spacing': [
        'error',
        { beforeColon: false, afterColon: true },
      ],
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      '@stylistic/jsx-curly-spacing': ['error', 'never'],
      '@stylistic/jsx-tag-spacing': [
        'error',
        { beforeSelfClosing: 'always' },
      ],

      // Airbnb 스타일 규칙들
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-alert': 'warn',
      'no-param-reassign': 'error',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'error',

      // React 관련 Airbnb 규칙들
      'react/react-in-jsx-scope': 'off', // Next.js에서는 불필요
      'react/prop-types': 'off', // TypeScript 사용 시 불필요
      'react/jsx-props-no-spreading': 'warn',
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.tsx', '.jsx'] },
      ],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-curly-brace-presence': [
        'error',
        { props: 'never', children: 'never' },
      ],
      'react/self-closing-comp': 'error',

      // Import 관련 Airbnb 규칙들
      'import/prefer-default-export': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
        },
      ],

      // 기타 코드 품질 규칙들
      'arrow-body-style': ['error', 'as-needed'],
      'object-shorthand': 'error',
      'prefer-template': 'error',
      'prefer-destructuring': [
        'error',
        {
          array: true,
          object: true,
        },
        {
          enforceForRenamedProperties: false,
        },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'node_modules/**',
  ]),
]);

export default eslintConfig;
