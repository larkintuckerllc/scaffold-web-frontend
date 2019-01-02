export default () => {
  return window.orientation !== undefined || navigator.userAgent.indexOf('IEMobile') !== -1;
};
