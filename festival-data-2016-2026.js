(function () {
  'use strict';

  function year(entries) {
    var result = {};
    entries.forEach(function (entry) {
      result[entry[0]] = { m: entry[1], d: entry[2], v: true };
    });
    return result;
  }

  window.SANATAN_FESTIVAL_YEARS = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];
  window.SANATAN_FESTIVAL_DATES = {
    2016: year([
      ['sankranti',1,15],['basant',2,12],['shivratri',3,7],['holika',3,23],['holi',3,24],['navratri1',4,8],['ramnavami',4,15],['hanuman',4,22],['baisakhi',4,13],['akshaya',5,9],['buddha',5,21],['gurpurnima',7,19],['nagpanchami',8,7],['raksha',8,18],['janmashtami',8,25],['ganesh',9,5],['ganeshvis',9,15],['navratri2',10,1],['dussehra',10,11],['sharadpurn',10,15],['karwa',10,19],['dhanteras',10,28],['chotidiwali',10,29],['diwali',10,30],['govardhan',10,31],['bhaidooj',11,1],['devuthani',11,10],['kartikpurn',11,14]
    ]),
    2017: year([
      ['sankranti',1,14],['basant',2,1],['shivratri',2,24],['holika',3,12],['holi',3,13],['navratri1',3,28],['ramnavami',4,5],['hanuman',4,11],['baisakhi',4,14],['akshaya',4,28],['buddha',5,10],['gurpurnima',7,9],['nagpanchami',7,27],['raksha',8,7],['janmashtami',8,14],['ganesh',8,25],['ganeshvis',9,5],['navratri2',9,21],['dussehra',9,30],['sharadpurn',10,5],['karwa',10,8],['dhanteras',10,17],['chotidiwali',10,18],['diwali',10,19],['govardhan',10,20],['bhaidooj',10,21],['devuthani',10,31],['kartikpurn',11,4]
    ]),
    2018: year([
      ['sankranti',1,14],['basant',1,22],['shivratri',2,13],['holika',3,1],['holi',3,2],['navratri1',3,18],['ramnavami',3,25],['hanuman',3,31],['baisakhi',4,14],['akshaya',4,18],['buddha',4,30],['gurpurnima',7,27],['nagpanchami',8,15],['raksha',8,26],['janmashtami',9,2],['ganesh',9,13],['ganeshvis',9,23],['navratri2',10,10],['dussehra',10,19],['sharadpurn',10,23],['karwa',10,27],['dhanteras',11,5],['chotidiwali',11,6],['diwali',11,7],['govardhan',11,8],['bhaidooj',11,9],['devuthani',11,19],['kartikpurn',11,23]
    ]),
    2019: year([
      ['sankranti',1,15],['basant',2,9],['shivratri',3,4],['holika',3,20],['holi',3,21],['navratri1',4,6],['ramnavami',4,13],['hanuman',4,19],['baisakhi',4,14],['akshaya',5,7],['buddha',5,18],['gurpurnima',7,16],['nagpanchami',8,5],['raksha',8,15],['janmashtami',8,24],['ganesh',9,2],['ganeshvis',9,12],['navratri2',9,29],['dussehra',10,8],['sharadpurn',10,13],['karwa',10,17],['dhanteras',10,25],['chotidiwali',10,27],['diwali',10,27],['govardhan',10,28],['bhaidooj',10,29],['devuthani',11,8],['kartikpurn',11,12]
    ]),
    2020: year([
      ['sankranti',1,15],['basant',1,29],['shivratri',2,21],['holika',3,9],['holi',3,10],['navratri1',3,25],['ramnavami',4,2],['hanuman',4,8],['baisakhi',4,13],['akshaya',4,26],['buddha',5,7],['gurpurnima',7,5],['nagpanchami',7,25],['raksha',8,3],['janmashtami',8,11],['ganesh',8,22],['ganeshvis',9,1],['navratri2',10,17],['dussehra',10,25],['sharadpurn',10,30],['karwa',11,4],['dhanteras',11,13],['chotidiwali',11,14],['diwali',11,14],['govardhan',11,15],['bhaidooj',11,16],['devuthani',11,25],['kartikpurn',11,30]
    ]),
    2021: year([
      ['sankranti',1,14],['basant',2,16],['shivratri',3,11],['holika',3,28],['holi',3,29],['navratri1',4,13],['ramnavami',4,21],['hanuman',4,27],['baisakhi',4,14],['akshaya',5,14],['buddha',5,26],['gurpurnima',7,24],['nagpanchami',8,13],['raksha',8,22],['janmashtami',8,30],['ganesh',9,10],['ganeshvis',9,19],['navratri2',10,7],['dussehra',10,15],['sharadpurn',10,19],['karwa',10,24],['dhanteras',11,2],['chotidiwali',11,4],['diwali',11,4],['govardhan',11,5],['bhaidooj',11,6],['devuthani',11,14],['kartikpurn',11,19]
    ]),
    2022: year([
      ['sankranti',1,14],['basant',2,5],['shivratri',3,1],['holika',3,17],['holi',3,18],['navratri1',4,2],['ramnavami',4,10],['hanuman',4,16],['baisakhi',4,14],['akshaya',5,3],['buddha',5,16],['gurpurnima',7,13],['nagpanchami',8,2],['raksha',8,11],['janmashtami',8,18],['ganesh',8,31],['ganeshvis',9,9],['navratri2',9,26],['dussehra',10,5],['sharadpurn',10,9],['karwa',10,13],['dhanteras',10,22],['chotidiwali',10,24],['diwali',10,24],['govardhan',10,26],['bhaidooj',10,26],['devuthani',11,4],['kartikpurn',11,8]
    ]),
    2023: year([
      ['sankranti',1,15],['basant',1,26],['shivratri',2,18],['holika',3,7],['holi',3,8],['navratri1',3,22],['ramnavami',3,30],['hanuman',4,6],['baisakhi',4,14],['akshaya',4,22],['buddha',5,5],['gurpurnima',7,3],['nagpanchami',8,21],['raksha',8,30],['janmashtami',9,6],['ganesh',9,19],['ganeshvis',9,28],['navratri2',10,15],['dussehra',10,24],['sharadpurn',10,28],['karwa',11,1],['dhanteras',11,10],['chotidiwali',11,12],['diwali',11,12],['govardhan',11,14],['bhaidooj',11,14],['devuthani',11,23],['kartikpurn',11,27]
    ]),
    2024: year([
      ['sankranti',1,15],['basant',2,14],['shivratri',3,8],['holika',3,24],['holi',3,25],['navratri1',4,9],['ramnavami',4,17],['hanuman',4,23],['baisakhi',4,13],['akshaya',5,10],['buddha',5,23],['gurpurnima',7,21],['nagpanchami',8,9],['raksha',8,19],['janmashtami',8,26],['ganesh',9,7],['ganeshvis',9,17],['navratri2',10,3],['dussehra',10,12],['sharadpurn',10,16],['karwa',10,20],['dhanteras',10,29],['chotidiwali',10,31],['diwali',11,1],['govardhan',11,2],['bhaidooj',11,3],['devuthani',11,12],['kartikpurn',11,15]
    ]),
    2025: year([
      ['sankranti',1,14],['basant',2,2],['shivratri',2,26],['holika',3,13],['holi',3,14],['navratri1',3,30],['ramnavami',4,6],['hanuman',4,12],['baisakhi',4,14],['akshaya',4,30],['buddha',5,12],['gurpurnima',7,10],['nagpanchami',7,29],['raksha',8,9],['janmashtami',8,16],['ganesh',8,27],['ganeshvis',9,6],['navratri2',9,22],['dussehra',10,2],['sharadpurn',10,6],['karwa',10,10],['dhanteras',10,18],['chotidiwali',10,20],['diwali',10,20],['govardhan',10,22],['bhaidooj',10,23],['devuthani',11,1],['kartikpurn',11,5]
    ]),
    2026: year([
      ['sankranti',1,14],['basant',1,23],['shivratri',2,15],['holika',3,3],['holi',3,4],['navratri1',3,19],['ramnavami',3,26],['hanuman',4,2],['baisakhi',4,14],['akshaya',4,20],['buddha',5,1],['gurpurnima',7,29],['nagpanchami',8,17],['raksha',8,28],['janmashtami',9,4],['ganesh',9,14],['ganeshvis',9,25],['navratri2',10,11],['dussehra',10,20],['sharadpurn',10,25],['karwa',10,29],['dhanteras',11,6],['chotidiwali',11,8],['diwali',11,8],['govardhan',11,10],['bhaidooj',11,11],['devuthani',11,20],['kartikpurn',11,24]
    ])
  };
})();
