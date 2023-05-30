```
**This extensions was created for demonstration purposes and is not meant for production purposes, yet**
```


# UN/LOCODE Data Model Extension – version 0.1.0

A [Data Model Extension](https://wbcsd.github.io/data-model-extensions/)
to the [Pathfinder Framework Data Model](https://wbcsd.github.io/data-exchange-protocol/v2/#data-model)
that allows for the specification of the [UN/LOCODE](https://unece.org/trade/uncefact/unlocode)
of a `ProductFootprint`.

## Technical Specifications

The technical foundations of the UN/LOCODE Data Model Extension, including considerations about its motivation and use, can be found [here](https://sine-fdn.github.io/locode-extension).

## `schema.json`

As per the [Technical Specifications for Data Model Extensions](https://wbcsd.github.io/data-model-extensions/spec/), a
data model extension must be provide by a `schema.json` specifying the object (and its properties) to be added to the Pathfinder Framework Data Model. That `schema.json` can be found [here](./specs/locode_schema.json).

## Samples

A sample `JSON` with the properties allowed for by the UN/LOCODE Data Model Extension can be found [here](./samples/locode_extension.json).

A sample full `ProductFootprint` including the UN/LOCODE extension can be found [here](./samples/sample_product_footprint.json).
