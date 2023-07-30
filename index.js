//index.js
const { mysql_utils } = require('./mysql_utils.js');
const utils = new mysql_utils();

async function fetchData() {
    try {
      var data = await utils.getAllData();
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      // 最后记得关闭数据库连接
      utils.connection.end();
    }
  }
  
fetchData();