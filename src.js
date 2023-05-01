var timeline = new Histropedia.Timeline("#timeline",{});
timeline.setOption({width:1500, height:700});	

var articles =
    [        
    {"id":26542,
        "title":"Canton River: the red fort and European quarters.",
        "subtitle":"1857-01-10",
        "from":{"year":"1857","month":"01","day":"10"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-6-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-006\/"
    },{
        "id":26543,
        "title":"The war with China. 1",
        "subtitle":"1857-01-17",
        "from":{"year":"1857","month":"01","day":"17"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-7-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-007\/"
    },{
        "id":26544,
        "title":"The war with China. 2",
        "subtitle":"1857-01-17",
        "from":{"year":"1857","month":"01","day":"17"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-8-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-008\/"
    },{
        "id":26545,
        "title":"Capture of Bocca Trgris forts by the English Squadron.",
        "subtitle":"1857-01-24",
        "from":{"year":"1857","month":"01","day":"24"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-9-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-009\/"
    },{
        "id":26546,
        "title":"The war with China. 3",
        "subtitle":"1857-01-31",
        "from":{"year":"1857","month":"01","day":"31"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-10-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-010\/"
    },{
        "id":26547,
        "title":"Form of a treaty of marriage in China.",
        "subtitle":"1857-02-14",
        "from":{"year":"1857","month":"02","day":"14"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-11-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-011\/"
    },{
        "id":26548,
        "title":"The war with China. 4",
        "subtitle":"1857-02-21",
        "from":{"year":"1857","month":"02","day":"21"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-12-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-012\/"
    },{
        "id":26549,
        "title":"Canton street-guard.",
        "subtitle":"1857-02-28",
        "from":{"year":"1857","month":"02","day":"28"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-13-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-013\/"
    },{
        "id":26550,
        "title":"Chinese rebels.",
        "subtitle":"1857-03-14",
        "from":{"year":"1857","month":"03","day":"14"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-14-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-014\/"
    },{
        "id":26551,
        "title":"Canton and part of the suburbs, sketched during the conflagration in the city",
        "subtitle":"1857-03-14",
        "from":{"year":"1857","month":"03","day":"14"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-15-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-015\/"
    },{
        "id":26552,
        "title":"The war with China. 5",
        "subtitle":"1857-03-21",
        "from":{"year":"1857","month":"03","day":"21"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-16-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-016\/"
    },{
        "id":26553,
        "title":"The war with China. 6",
        "subtitle":"1857-03-28",
        "from":{"year":"1857","month":"03","day":"28"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-17-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-017\/"
    },{
        "id":26554,
        "title":"Chinese criminal led to execution.",
        "subtitle":"1857-04-04",
        "from":{"year":"1857","month":"04","day":"04"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-18-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-018\/"
    },{
        "id":26555,
        "title":"The 'Eaglet' and the 'Auckland's' boats destroying Mandarin junks at Toon-chung.",
        "subtitle":"1857-05-09",
        "from":{"year":"1857","month":"05","day":"09"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-19-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-019\/"
    },{
        "id":26556,
        "title":"Sketches in China. 1",
        "subtitle":"1857-07-25",
        "from":{"year":"1857","month":"07","day":"25"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-20-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-020\/"
    },{
        "id":26557,
        "title":"The war in China. 1",
        "subtitle":"1857-08-15",
        "from":{"year":"1857","month":"08","day":"15"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-21-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-021\/"
    },{
        "id":26558,
        "title":"Coolies at Hong-kong, in wet weather.",
        "subtitle":"1857-09-19",
        "from":{"year":"1857","month":"09","day":"19"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-22-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-022\/"
    },{
        "id":26559,
        "title":"The war in China. 2",
        "subtitle":"1858-02-13",
        "from":{"year":"1858","month":"02","day":"13"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-23-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-023\/"
    },{
        "id":26560,
        "title":"The war in China. 3",
        "subtitle":"1858-02-13",
        "from":{"year":"1858","month":"02","day":"13"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-24-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-024\/"
    },{
        "id":26561,
        "title":"The war in China. 4",
        "subtitle":"1858-02-27",
        "from":{"year":"1858","month":"02","day":"27"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-25-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-025\/"
    },{
        "id":26562,
        "title":"The war in China. 5",
        "subtitle":"1858-02-27",
        "from":{"year":"1858","month":"02","day":"27"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-26-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-026\/"
    },{
        "id":26563,
        "title":"The war in China. 6",
        "subtitle":"1858-03-06",
        "from":{"year":"1858","month":"03","day":"06"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-27-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-027\/"
    },{
        "id":26564,
        "title":"The war in China. 7",
        "subtitle":"1858-03-06",
        "from":{"year":"1858","month":"03","day":"06"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-28-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-028\/"
    },{
        "id":26565,
        "title":"The war in China. 8",
        "subtitle":"1858-03-20",
        "from":{"year":"1858","month":"03","day":"20"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-29-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-029\/"
    },{
        "id":26566,
        "title":"The war in China. 9",
        "subtitle":"1858-04-10",
        "from":{"year":"1858","month":"04","day":"10"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-30-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-030\/"
    },{
        "id":26567,
        "title":"The war in China. 10",
        "subtitle":"1858-04-17",
        "from":{"year":"1858","month":"04","day":"17"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-31-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-031\/"
    },{
        "id":26568,
        "title":"Sketches in China. 2",
        "subtitle":"1858-05-08",
        "from":{"year":"1858","month":"05","day":"08"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-32-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-032\/"
    },{
        "id":26569,
        "title":"Sketches in China. 3",
        "subtitle":"1858-05-29",
        "from":{"year":"1858","month":"05","day":"29"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-33-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-033\/"
    },{
        "id":26570,
        "title":"Sketches in China. 4",
        "subtitle":"1858-06-05",
        "from":{"year":"1858","month":"06","day":"05"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-34-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-034\/"
    },{
        "id":26571,
        "title":"Sketches in China. 5",
        "subtitle":"1858-06-26",
        "from":{"year":"1858","month":"06","day":"26"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-35-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-035\/"
    },{
        "id":26572,
        "title":"Attack on the 'braves' near the White Cloud Mountain, Canton.",
        "subtitle":"1858-08-14",
        "from":{"year":"1858","month":"08","day":"14"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-36-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-036\/"
    },{
        "id":26573,
        "title":"Sketches in China. 6",
        "subtitle":"1858-09-18",
        "from":{"year":"1858","month":"09","day":"18"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-37-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-037\/"
    },{
        "id":26574,
        "title":"Signing of the treaty between England and China at Tien-tsin on June 26, 1858",
        "subtitle":"1858-10-02",
        "from":{"year":"1858","month":"10","day":"02"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-38-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-038\/"
    },{
        "id":26575,
        "title":"Sketches in Canton.",
        "subtitle":"1858-10-09",
        "from":{"year":"1858","month":"10","day":"09"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-39-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-039\/"
    },{
        "id":26576,
        "title":"Sketches at Canton.",
        "subtitle":"1858-10-16",
        "from":{"year":"1858","month":"10","day":"16"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-40-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-040\/"
    },{
        "id":26577,
        "title":"Sketches from China.",
        "subtitle":"1858-11-20",
        "from":{"year":"1858","month":"11","day":"20"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-41-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-041\/"
    },{
        "id":26578,
        "title":"Sketches in China. 7",
        "subtitle":"1858-12-11",
        "from":{"year":"1858","month":"12","day":"11"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-42-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-042\/"
    },{
        "id":26579,
        "title":"Opium-smoking in China.",
        "subtitle":"1858-12-18",
        "from":{"year":"1858","month":"12","day":"18"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-43-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-043\/"
    },{
        "id":26580,
        "title":"Sketches in China. 8",
        "subtitle":"1858-12-25",
        "from":{"year":"1858","month":"12","day":"25"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-44-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-044\/"
    },{
        "id":26581,
        "title":"Sketches in China. 9",
        "subtitle":"1859-03-12",
        "from":{"year":"1859","month":"03","day":"12"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-45-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-045\/"
    },{
        "id":26582,
        "title":"'My doctor.'",
        "subtitle":"1859-03-26",
        "from":{"year":"1859","month":"03","day":"26"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-46-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-046\/"
    },{
        "id":26583,
        "title":"The rebels, or Taipings, at Nankin opening fire upon the 'Lee' gun-boat",
        "subtitle":"1859-04-02",
        "from":{"year":"1859","month":"04","day":"02"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-47-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-047\/"
    },{
        "id":26584,
        "title":"Sketches from China",
        "subtitle":"1859-04-02",
        "from":{"year":"1859","month":"04","day":"02"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-48-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-048\/"
    },{
        "id":26585,
        "title":"Sketches in China. 10",
        "subtitle":"1859-04-16",
        "from":{"year":"1859","month":"04","day":"16"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-49-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-049\/"
    },{
        "id":26586,
        "title":"Sketches in China. 11",
        "subtitle":"1859-04-23",
        "from":{"year":"1859","month":"04","day":"23"},
        "imageUrl":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/wp-content\/uploads\/ILN-50-small.jpg",
        "link":"https:\/\/bcc.lib.hkbu.edu.hk\/artcollection\/iln-050\/"
    }];
timeline.load(articles);
timeline.setZoom(20); 
timeline.setStartDate("1857-01-01");

timeline.articleDoubleClickedHandlers = [function (article) {
    window.open(article.data.link)
}]