// Use this file to change prototype configuration.

// Note: prototype config can be overridden using environment variables (eg on heroku)

module.exports = {
  // Service name used in header. Eg: 'Renew your passport'
  serviceName: 'Universal Credit',

  // Default port that prototype runs on
  port: '3000',

  // Enable or disable password protection on production
  useAuth: 'true',

  // Enable or disable built-in docs and examples.
  useDocumentation: 'true',

  // Force HTTP to redirect to HTTPs on production
  useHttps: 'true',

  // Cookie warning - update link to service's cookie page.
  cookieText: 'We have placed cookies on your computer or other device to help make this website better. You can change your cookies settings at any time and can <a href="#" title="find out about cookies here">find out about cookies here</a>. If you continue using this site we will assume you accept these cookies.',

  useBrowserSync: 'true'
}
