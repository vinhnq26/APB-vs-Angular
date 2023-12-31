import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'WIZLOG',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44337/',
    redirectUri: baseUrl,
    clientId: 'WIZLOG_App',
    responseType: 'code',
    scope: 'offline_access WIZLOG',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44337',
      rootNamespace: 'WIZLOG',
    },
  },
} as Environment;
