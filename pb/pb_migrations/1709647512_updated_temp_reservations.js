/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bfhyz6xa3vcfu9h")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3ryzq6d2",
    "name": "expires",
    "type": "date",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bfhyz6xa3vcfu9h")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3ryzq6d2",
    "name": "expires",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
