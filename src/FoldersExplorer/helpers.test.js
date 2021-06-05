import {convertToLookupTable} from './helpers'

const testDateList = [
    {
        "id": "urn:intuit: customersuccess: customer360: CSGoldCompany",
        "displayName": "CSGoldCompany",
        "lastUpdated": {
          "updatedAt": "2020-11-02T16: 44:56.538734Z",
          "updatedBy": "@rfeygenberg"
        }
      },
      {
        "id": "urn:intuit: customersuccess: customer360: CSGoldPerson",
        "displayName": "CSGoldPerson",
        "lastUpdated": {
          "updatedAt": "2020-12-02T16: 44:56.538734Z",
          "updatedBy": "@rfeygenberg"
        }
      }
]

const resultDataList = {
    urn:{
        children:{
            intuit:{
                children:{
                    customersuccess:{
                        children:{
                            customer360:{
                                children:{
                                    CSGoldCompany:{
                                        children:{},
                                        displayName: "CSGoldCompany",
                                        lastUpdated:{
                                            updatedAt: "2020-11-02T16:44:56.538734Z",
                                            updatedBy: "@rfeygenberg"
                                        },
                                        parent: "customer360",
                                        parentPath: "urn.children.intuit.children.customersuccess.children.customer360.children.CSGoldCompany"
                                    },
                                    CSGoldPerson:{
                                        children:{},
                                        displayName: "CSGoldPerson",
                                        lastUpdated:{
                                            updatedAt: "2020-12-02T16:44:56.538734Z",
                                            updatedBy: "@rfeygenberg"
                                        },
                                        parent: "customer360",
                                        parentPath: "urn.children.intuit.children.customersuccess.children.customer360.children.CSGoldPerson"
                                    }
                                },
                                displayName: "customer360",
                                lastUpdated:{
                                    updatedAt: "2020-12-02T16:44:56.538734Z",
                                    updatedBy: "@rfeygenberg"
                                },
                                parent: "customersuccess",
                                parentPath: "urn.children.intuit.children.customersuccess.children.customer360"
                            }
                        },
                        displayName: "customersuccess",
                        lastUpdated:{
                            updatedAt: "2020-12-02T16:44:56.538734Z",
                            updatedBy: "@rfeygenberg"
                        },
                        parent: "intuit",
                        parentPath: "urn.children.intuit.children.customersuccess"
                    }
                }, 
                displayName:"intuit",
                lastUpdated:{
                    updatedAt: "2020-12-02T16:44:56.538734Z",
                    updatedBy: "@rfeygenberg"
                },
                parent: "urn",
                parentPath: "urn.children.intuit"
            }
        },
        displayName:"urn",
        lastUpdated:"",
        parent:"",
        parentPath: "urn"
    }
}

describe('convertToLookupTable', ()=>{
    it('get data list of 2 objects:', ()=>{
        const result = convertToLookupTable(testDateList)
        expect(result).toEqual(resultDataList)
    })
})