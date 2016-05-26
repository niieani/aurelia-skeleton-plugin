import {FrameworkConfiguration, LogManager} from 'aurelia-framework'
const logger = LogManager.getLogger('aurelia-plugin-skeleton')

export function configure(frameworkConfig: FrameworkConfiguration) {
  logger.debug('Configuring the plugin skeleton.')
}
