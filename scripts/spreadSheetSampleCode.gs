function doGet() {
  console.log("スプシから作ったやつ")
  //  スプレッドシートの読み込み
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  //  シートの選択
  const sheet = spreadsheet.getSheetByName('シート1')
  //  セルの選択
  const range = sheet.getRange('A1')
  //  セルの値を取得する
  const value = range.getValue()
  //  メッセージを表示する
  // Browser.msgBox(value)
  console.log(value)
}
