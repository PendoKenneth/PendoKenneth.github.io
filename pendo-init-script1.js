// Call this whenever information about your visitors becomes available
        // Please use Strings, Numbers, or Bools for value types.
        pendo.initialize({
            visitor: {
                id:            'PU-0000021',   // Required if user is logged in
                email:         'kenneth.lewis@pendo.io',  // Recommended if using Pendo Feedback, or NPS Email
                full_name:    'Kenneth Lewis',   // Recommended if using Pendo Feedback
                firstName:    'Kenneth',
                surname:      'Lewis',
                role:         'Sr. CSM', // Optional
                eventdate:    '2023-07-14'//,
                //starRating:    'All-Star'

                // You can add any additional visitor level key-values here,
                // as long as it's not one of the above reserved names.
            },

            account: {
                id:           'PendoAllStar123', // Required if using Pendo Feedback
                //name:         '', // Optional
                is_paying:    'True', // Recommended if using Pendo Feedback
                //monthly_value:  '500,000', // Recommended if using Pendo Feedback
                planLevel:    'Enterprise', // Optional
                // planPrice:    // Optional
                creationDate: '2021-02-01', // Optional
                sfdc_acc: 'Org_PendoAllStar123'

                // You can add any additional account level key-values here,
                // as long as it's not one of the above reserved names.
            },
            
            parentAccount: {
               // id:           'Pendo',
               // name:         'Pendo'  // Optional

                // You can add any additional parent account level key-values here,
                // as long as it's not one of the above reserved names.
            }
        });
    
