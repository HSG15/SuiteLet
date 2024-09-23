/**
 * @NApiVersion 2.0
 * @NScriptType Suitelet
 */

define(['N/ui/serverWidget', 'N/record', 'N/log'],
    function(serverWidget, record, log) {
        function onRequest(scriptContext) {
            if(scriptContext.request.method == 'GET') {

                // // Question No. 1
                // {
        
                //     var form = serverWidget.createForm({
                //         title: 'Vendor Information'
                //     })

                //     form.addButton({
                //         id: 'custpage_buttonid',
                //         label: 'Submit'
                //     })
                    
                //     // SUBTAB 1
                //     form.addFieldGroup({
                //         id: 'custfield_subtab1',
                //         label: 'Primary Information'
                //     })

                //     // TITLE
                //     var titleField = form.addField({
                //         id: 'custpage_title',
                //         label: 'TITLE',
                //         type: serverWidget.FieldType.SELECT,
                //         container: 'custfield_subtab1'
                //     })

                //     titleField.addSelectOption({
                //         value: 'mr',
                //         text: 'Mr.'
                //     })

                //     titleField.addSelectOption({
                //         value: 'mrs',
                //         text: 'Mrs.'
                //     })

                //     // TYPE
                //     var typeField = form.addField({
                //         id: 'custpage_type',
                //         label: 'TYPE',
                //         type: serverWidget.FieldType.SELECT,
                //         container: 'custfield_subtab1'
                //     })

                //     typeField.addSelectOption({
                //         value: 'company',
                //         text: 'Company'
                //     })

                //     // FIRST NAME
                //     form.addField({
                //         id: 'custpage_firstname',
                //         label: 'FIRST NAME',
                //         type: serverWidget.FieldType.TEXT,
                //         container: 'custfield_subtab1'
                //     })                            

                //     // LAST NAME
                //     form.addField({
                //         id: 'custpage_laststname',
                //         label: 'LAST NAME',
                //         type: serverWidget.FieldType.TEXT,
                //         container: 'custfield_subtab1'
                //     })

                    
                //     // SUBTAB 2
                //     form.addFieldGroup({
                //         id: 'custpage_subtab2',
                //         label: 'Company Information'
                //     })

                //     // EMAIL
                //     form.addField({
                //         id: 'custfield_email',
                //         label: 'EMAIL',
                //         type: serverWidget.FieldType.TEXT,
                //         container: 'custpage_subtab2'
                //     })

                //     // PHONE NUMBER 
                //     form.addField({
                //         id: 'custfield_phone',
                //         label: 'PHONE NUMBER',
                //         type: serverWidget.FieldType.TEXT,
                //         container: 'custpage_subtab2'
                //     })

                //     // WEBSITE
                //     form.addField({
                //         id: 'custfield_website',
                //         label: 'WEBSITE',
                //         type: serverWidget.FieldType.TEXT,
                //         container: 'custpage_subtab2'
                //     })
                // }

                // Question No. 2
                {
                    var form = serverWidget.createForm({
                        title: 'Employee Form'
                    })

                    form.addSubmitButton({
                        label: 'Save'
                    })

                    form.addButton({
                        id: 'custpage_buttonCancel',
                        label: 'Cancel'
                    })

                    // SUBTAB 1.1
                    var field_group1 = form.addFieldGroup({
                        id: 'custpage_subtab1_1',
                        label: 'Primary Information'
                    })

                    field_group1.isSingleColumn = true

                    // INITIALS
                    form.addField({
                        id: 'custpage_initials',
                        label: 'INITIALS',
                        type: serverWidget.FieldType.SELECT,
                        container: 'custpage_subtab1_1'
                    })

                    // JOB TITLE
                    form.addField({
                        id: 'custpage_jobtitle',
                        label: 'JOB TITLE',
                        type: serverWidget.FieldType.TEXT,
                        container: 'custpage_subtab1_1'
                    })

                    // NAME
                    var name = form.addField({
                        id: 'custpage_name',
                        label: 'NAME',
                        type: serverWidget.FieldType.TEXT,
                        container: 'custpage_subtab1_1'
                    })
                    name.isMandatory = true

                    // IMAGE
                    form.addField({
                        id: 'custpage_image',
                        label: 'IMAGE',
                        type: serverWidget.FieldType.IMAGE,
                        container: 'custpage_subtab1_1'
                    })

                    // SUBTAB 1.2
                    var field_group2 = form.addFieldGroup({
                        id: 'custpage_subtab1_2',
                        label: 'Email | Phone | Address',
                    })

                    field_group2.isSingleColumn = true

                    // EMAIL
                    form.addField({
                        id: 'custpage_email',
                        label: 'EMAIL',
                        type: serverWidget.FieldType.TEXT,
                        container: 'custpage_subtab1_2'
                    })
                   
                    // PHONE
                    form.addField({
                        id: 'custpage_phone',
                        label: 'PHONE',
                        type: serverWidget.FieldType.TEXT,
                        container: 'custpage_subtab1_2'
                    })     

                    // ADDRESS
                    form.addField({
                        id: 'custpage_address',
                        label: 'ADDRESS',
                        type: serverWidget.FieldType.TEXTAREA,
                        container: 'custpage_subtab1_2'
                    })

                    // SUBTAB 2
                    form.addFieldGroup({
                        id: 'custpage_subtab2',
                        label: 'Classification',
                    })

                    var subsidary = form.addField({
                        id: 'custpage_subs',
                        label: 'SUBSIDARY',
                        type: serverWidget.FieldType.SELECT,
                        container: 'custpage_subtab2'
                    })

                    subsidary.addSelectOption({
                        text: 'BFL',
                        value: 9
                    })
                    // subsidary.addSelectOption({
                    //     text: 'Hadapsar',
                    //     value: 'Hadapsar, Pune'
                    // })
                    // subsidary.addSelectOption({
                    //     text: 'Manapa',
                    //     value: 'Manapa, Pune'
                    // })

                    subsidary.isMandatory = true

                    form.addField({
                        id: 'custpage_loca',
                        label: 'LOCATION',
                        type: serverWidget.FieldType.SELECT,
                        container: 'custpage_subtab2'
                    })

                    form.addField({
                        id: 'custpage_dept',
                        label: 'DEPARTMENT',
                        type: serverWidget.FieldType.SELECT,
                        container: 'custpage_subtab2'
                    })

                    form.addField({
                        id: 'custpage_supervisor',
                        label: 'SUPERVISOR',
                        type: serverWidget.FieldType.SELECT,
                        container: 'custpage_subtab2'
                    })

                    form.addField({
                        id: 'custpage_currency',
                        label: 'CURRENCY',
                        type: serverWidget.FieldType.SELECT,
                        container: 'custpage_subtab2'
                    })

                    form.addField({
                        id: 'custpage_class',
                        label: 'CLASS',
                        type: serverWidget.FieldType.SELECT,
                        container: 'custpage_subtab2'
                    })

                }

                scriptContext.response.writePage(form);

            }else{
                var fieldValueName = scriptContext.request.parameters.custpage_name
                log.debug('Field value is : ' + fieldValueName)

                var newRecord = record.create({
                    type: record.Type.EMPLOYEE,
                    isDynamic: true
                })

                newRecord.setValue({
                    fieldId: 'firstname',
                    value: fieldValueName
                })

                var fv_subsidary = scriptContext.request.parameters.custpage_subs
                log.debug('Subsidary is ' + fv_subsidary)
                newRecord.setValue({
                    fieldId: 'subsidiary',
                    value: fv_subsidary
                })

                var recordId = newRecord.save()

                scriptContext.response.write('Record created with record id: ' + recordId)
            }
        }
        return {
            onRequest: onRequest
        }
    }
)