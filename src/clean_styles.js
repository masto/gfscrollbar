[].forEach.call(document.styleSheets, function(sheet) {
  if (sheet && sheet.rules) {
    for (var i = 0; i < sheet.rules.length; ++i) {
        var rule = sheet.rules[i];
        if (/::-webkit-scrollbar/.test(rule.selectorText)) {
            sheet.deleteRule(i--);
        }
    }
  }
});
