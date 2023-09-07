# RMI Aluminum Emissions Reporting Guidance
This repository holds the necessary tools and guidance for exchanging emissions data in line with RMI's Aluminum Emissions Reporting Guidance, along with licensing and sample files.

The guidance was launched for a public consultation in June of 2023--you can read the announcement [here](https://rmi.org/delivering-a-net-zero-future-for-aluminum/) and related two-pager [here](https://rmi.org/wp-content/uploads/2022/08/horizon_zero_aluminum_two_pager.pdf).

The guidance serves as a methodological foundation for RMI's Aluminum Data Model. Designed in concert with the guidance, the Aluminum Data Model encapsulated the outputs of the guidance, represented as a [Data Model Extension](https://wbcsd.github.io/data-model-extensions/spec/) to the [Pathfinder Data Model.](https://wbcsd.github.io/data-exchange-protocol/v2/#biblio-extensions-guidance)

## Product Level Accounting Guidance
[RMI's Aluminum Emissions Reporting Guidance](https://rmi.org/wp-content/uploads/dlm_uploads/2023/06/aluminum_guidance_public_consultation.pdf) serves as a tool for aluminum companies to report emissions in a way that drives industry-wide actions on decarbonization and accelerates the development of a differentiated market for low-carbon aluminum.

The broad intent of the implementation of this guidance is to ensure the following:
1. Increase transparency of aluminum product-level emissions with a globally consistent methodology.
2. Credibly recognize aluminum producers leading the market in terms of climate performance.
3. Accelerate the development of essential technologies for net-zero aluminum by ensuring sufficient information is
available to link demand with supply.
4. Enable end users to compare climate performance across supplied aluminum products (of various specifications) to
better inform procurement decisions.
5. To aid end users in purchasing aluminum with credible and transparent climate data so they can demonstrate
evidence of climate performancei
to their customers.

### Principles
There are three accounting principles for reporting aluminum sector emissions using this Aluminum Emissions Reporting Guidance:

#### 1. Primary data
As much as possible, emissions calculations should be based on first-hand information from various
supply chain partners.

#### 2. Consistent boundary for comparison
Companies shall report emissions against a fixed boundary (i.e., a consistent
set of processes) to enable comparability and consistency between disclosures.

#### 3. Measurement made for market
Ensure calculation and reporting decisions enable the development of a market for
low-carbon products.

## RMI Aluminum Data Model
RMI's Aluminum Data Model enables the use of machine-readable sharing of the product level information calculated with [RMI's Aluminum Emissions Reporting Guidance.](https://rmi.org/wp-content/uploads/dlm_uploads/2023/06/aluminum_guidance_public_consultation.pdf)

It has been designed as an extension to the [Pathfinder Data Model.](https://wbcsd.github.io/data-exchange-protocol/v2/#biblio-extensions-guidance) Extensions to the model allow for sector specific information to be added to the data model.

### Properties
RMI's Aluminum Data Model is comprised of the following properties:

#### Benchmarking
  Emissions associated with all relevant processes from bauxite mining to final cast-house. For more information see Sec 2.2 Fixed System Boundary of RMI's [Aluminum Emissions Reportings Guidance.](https://rmi.org/wp-content/uploads/dlm_uploads/2023/05/aluminum_guidance_public_consultation.pdf)

#### Mine to Smelter
  The ore-based or mine-to-smelter portion of aluminum production. For more information, please refer Secs 2.3 and 3.2 of RMI's [Aluminum Emissions Reporting Guidance.](https://rmi.org/wp-content/uploads/dlm_uploads/2023/05/aluminum_guidance_public_consultation.pdf)

#### Value Added Product
  Final cast-house products such as slabs, billets, foundry alloys, wire rods, and other specialty products. For more information, please refer to Sec 2.3 of RMI's [Aluminum Emissions Reporting Guidance.](https://rmi.org/wp-content/uploads/dlm_uploads/2023/05/aluminum_guidance_public_consultation.pdf)
  
#### Full Boundary
  Emissions associated with all relevant processes from bauxite mining to semi-fabrications. For more information see Sec 2.2 Fixed System Boundary of RMI's [Aluminum Emissions Reportings Guidance.](https://rmi.org/wp-content/uploads/dlm_uploads/2023/05/aluminum_guidance_public_consultation.pdf)

### Techical Guidance
For the full techical specification of RMI's Aluminum Data Model Extension, see [here.](https://github.com/RMI/aluminum-guidance/blob/main/specs/aluminum_technical_specification.md)

#### Sample and Schema Files
A sample file of the data model can be found [here.](https://github.com/RMI/aluminum-guidance/blob/main/samples/aluminum_sample.json) Note: this sample file includes the required fields for the Pathfinder Data Model file as well as RMI's Aluminum Data Model.

A json schema file for the data model can be found [here.](https://github.com/RMI/aluminum-guidance/blob/main/specs/aluminum_schema.json)

## Contacts

### RMI
For questions please contact ghgtransparency@rmi.org
