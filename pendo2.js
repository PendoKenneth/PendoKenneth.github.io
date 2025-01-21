(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
    v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo2.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

        // Call this whenever information about your visitors becomes available
        // Please use Strings, Numbers, or Bools for value types.
        pendo.initialize({
            visitor: {
                id:            'PU-0000022',   // Required if user is logged in
                email:         'john.lewis@pendo.io',  // Recommended if using Pendo Feedback, or NPS Email
                full_name:    'John Lewis',   // Recommended if using Pendo Feedback
                firstName:    'John',
                surname:      'Lewis',
                role:         'CEO', // Optional
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
    
})('f2b44630-7489-4192-4efe-33802ab41173');
