/**
 * Created by Rain on 2017/3/22.
 */
var startJson = {
  "RESPCODE": 0,
  "RESPMSG": "操作成功",
  "RESULT": {
    "MIN_SEP": "5000",
    "MAIN_MILEAGE": "100000",
    "IS_CAN_STORE": "0",
    "NEED_ITEM": [
      {
        "IS_VISIT": "0",
        "ITEM_ID": "1",
        "ITEM_NAME": "机油",
        "INTRO": "推荐5000公里修理一次\/6个月",
        "PRICE": "100",
        "ITEM_STATUS": "1",
        "ITEM_TYPE": "1",
        "ITEMS": [
          {
            "ITEM_ID": "23",
            "ITEM_NAME": "嘉实多（极护）0W-40全合成机油 7L ",
            "PRICE": "602",
            "IMG_URL": "http:\/\/www.52cdd.com\/Butler\/data\/attachment\/image\/20160823\/1010aecf50b12c9827c5a00d7132eae8.jpg",
            "IS_VOUCH": "1"
          },
          {
            "ITEM_ID": "41",
            "ITEM_NAME": "金美孚0W-40全合成机油 7L ",
            "PRICE": "726",
            "IMG_URL": "http:\/\/www.52cdd.com\/Butler\/data\/attachment\/image\/20160823\/1010aecf50b12c9827c5a00d7132eae8.jpg",
            "IS_VOUCH": "1"
          },
          {
            "ITEM_ID": "55",
            "ITEM_NAME": "壳牌（灰喜力）5W-30全合成机油 7L ",
            "PRICE": "614",
            "IMG_URL": "http:\/\/www.52cdd.com\/Butler\/data\/attachment\/image\/20160823\/1010aecf50b12c9827c5a00d7132eae8.jpg",
            "IS_VOUCH": "1"
          },
          {
            "ITEM_ID": "982",
            "ITEM_NAME": "俄罗斯原装进口5W-40合成机油 7L",
            "PRICE": "508",
            "IMG_URL": "http:\/\/www.52cdd.com\/Butler\/data\/attachment\/image\/20160823\/1010aecf50b12c9827c5a00d7132eae8.jpg",
            "IS_VOUCH": "1"
          },
          {
            "ITEM_ID": "1646",
            "ITEM_NAME": "俄罗斯原装进口5W-30全合成机油 7L",
            "PRICE": "764",
            "IMG_URL": "http:\/\/www.52cdd.com\/Butler\/data\/attachment\/image\/20160823\/1010aecf50b12c9827c5a00d7132eae8.jpg",
            "IS_VOUCH": "1"
          },
          {
            "ITEM_ID": "",
            "ITEM_NAME": null,
            "PRICE": "764",
            "IMG_URL": "http:\/\/www.52cdd.com\/Butler\/data\/attachment\/image\/20160823\/1010aecf50b12c9827c5a00d7132eae8.jpg",
            "IS_VOUCH": "1"
          },
          {
            "ITEM_ID": "",
            "ITEM_NAME": null,
            "PRICE": "508",
            "IMG_URL": "http:\/\/www.52cdd.com\/Butler\/data\/attachment\/image\/20160823\/1010aecf50b12c9827c5a00d7132eae8.jpg",
            "IS_VOUCH": "1"
          }
        ]
      },
      {
        "IS_VISIT": "0",
        "ITEM_ID": "2",
        "ITEM_NAME": "机油滤清器",
        "INTRO": "推荐5000公里修理一次\/6个月",
        "PRICE": "100",
        "ITEM_STATUS": "1",
        "ITEM_TYPE": "1",
        "ITEMS": [
          {
            "ITEM_ID": "0",
            "ITEM_NAME": "暂无此配件，请致电4008200260",
            "PRICE": "0",
            "IMG_URL": "",
            "IS_VOUCH": "1"
          }
        ]
      },
      {
        "IS_VISIT": "0",
        "ITEM_ID": "5",
        "ITEM_NAME": "空气滤清器",
        "INTRO": "推荐5000公里修理一次\/6个月",
        "PRICE": "100",
        "ITEM_STATUS": "1",
        "ITEM_TYPE": "1",
        "ITEMS": [
          {
            "ITEM_ID": "0",
            "ITEM_NAME": "暂无此配件，请致电4008200260",
            "PRICE": "0",
            "IMG_URL": "",
            "IS_VOUCH": "1"
          }
        ]
      },
      {
        "IS_VISIT": "1",
        "ITEM_ID": "6",
        "ITEM_NAME": "火花塞",
        "INTRO": "推荐5000公里修理一次\/6个月",
        "PRICE": "80",
        "ITEM_STATUS": "3",
        "ITEM_TYPE": "2",
        "ITEMS": [
          {
            "ITEM_ID": "0",
            "ITEM_NAME": "暂无此配件，请致电4008200260",
            "PRICE": "0",
            "IMG_URL": "",
            "IS_VOUCH": "1"
          }
        ]
      },
      {
        "IS_VISIT": "1",
        "ITEM_ID": "8",
        "ITEM_NAME": "刹车油",
        "INTRO": "推荐5000公里修理一次\/6个月",
        "PRICE": "100",
        "ITEM_STATUS": "3",
        "ITEM_TYPE": "2",
        "ITEMS": [
          {
            "ITEM_ID": "0",
            "ITEM_NAME": "暂无此配件，请致电4008200260",
            "PRICE": "0",
            "IMG_URL": "",
            "IS_VOUCH": "1"
          }
        ]
      },
      {
        "IS_VISIT": "1",
        "ITEM_ID": "7",
        "ITEM_NAME": "变速箱油",
        "INTRO": "推荐5000公里修理一次\/6个月",
        "PRICE": "100",
        "ITEM_STATUS": "3",
        "ITEM_TYPE": "2",
        "ITEMS": [
          {
            "ITEM_ID": "0",
            "ITEM_NAME": "暂无此配件，请致电4008200260",
            "PRICE": "0",
            "IMG_URL": "",
            "IS_VOUCH": "1"
          }
        ]
      }
    ]
  }
};

var needArr = [];
var serverArr = [];

var needItem = startJson.RESULT.NEED_ITEM;

for (var i = 0; i < needItem.length; i++) {
  if (needItem[i].ITEM_TYPE === '1') {
    needArr.push(needItem[i]);
  } else if (needItem[i].ITEM_TYPE === '2') {
    serverArr.push(needItem[i])
  }
}

console.log(needArr);
console.log(needItem);


