export class Validator {
    validateUsername(username) {
      const isAllowedSymbol = !(/[^-_a-zA-Z\d]/.test(username));
      const isNumInRow = !(/\d{4}/.test(username));
      const firstLastSymbol = !(/^[-,_,\d]|[-,_,\d]$/.test(username));

      return isAllowedSymbol && isNumInRow && firstLastSymbol;
    }
}