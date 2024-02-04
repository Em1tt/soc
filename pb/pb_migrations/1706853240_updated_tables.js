/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yg2u2arwhy2hoan")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kuvcmsgu",
    "name": "count",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yg2u2arwhy2hoan")

  // remove
  collection.schema.removeField("kuvcmsgu")

  return dao.saveCollection(collection)
})
