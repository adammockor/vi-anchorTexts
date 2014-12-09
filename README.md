# vi-anchorTexts

**Project**: 7. Anchor texts a štatistika k anchortextom. Document frequency, collection frequency.

## Installation

1. Clone this repository
2. Run: ```npm install```
3. Install [Elasticsearch](http://www.elasticsearch.org/guide/en/elasticsearch/guide/current/_installing_elasticsearch.html)

## Usage

1. Parse XML file and create Elasticsearch index (myindex)
```$ node parseXML.js [fileName]```

2. Search for anchor   
```$ node search.js "[anchor]"```

## Stats

Stats for file: skwiki-20140906-pages-articles.xml  
Total count of anchors: 5806777  
Average anchors per page: 17.282  
Pages with anchor link on them: 1024543  
Avarege count of anchor texts per anchor: 1.8189  
Avarege count of different anchor texts per anchor: 1.6456  

## Test

Run: ```npm test```

## Author

Adam Močkoř @ 2014
