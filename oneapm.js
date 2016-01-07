/**
 * OneAPM agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
  app_name : [],
  license_key : 'DFsJBwEEUQc4b85BSlZBXwgeWk32e0EOVBkBAlQFF8f84VcKGQJcHgYF3d24Uw0YAgNIAgw=',
  logging : {
    /**
     * Level at which to log. 'trace' is most useful to OneAPM when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level : 'info'
  },
  transaction_events: {
    enabled: true
  }
};

if (process.env.NODE_ENV === 'staging') {
  exports.config.app_name.push('Hiwu (staging)');
}
else if (process.env.NODE_ENV === 'production') {
  exports.config.app_name.push('Hiwu');
}
else {
  exports.config.app_name.push('Hiwu (development)');
}
