$('.occupation').select2();
$('.country').select2();
$('#religion').select2();
$('#gender').select2();
$('#blood').select2();
$('#marital').select2();
$('#visa_type').select2();
$('#visa_country').select2();
$('#visa_category').select2();
$('#apply_under').select2();


$(document).ready(function(){

    $("#application_type").on("change",function(){
        var application_type = $(this).val();
        if(application_type=='application_id')
        {

            $("#application").show();
             $("#referencation").hide();
        }
        else if(application_type=='referencation_number')
        {
            $("#referencation").show();
            $("#application").hide();
            $('#r_occupation').select2();
            $('#r_country').select2();
        }
        else if(application_type=='new_visa')
        {
            $("#application").hide();
            $("#referencation").hide();
        }
        else
        {
            ("#application").hide();
            $("#referencation").hide();
        }
        
    });

    


    // Referencation Occupation
    $(".referncation_occu").on('change',function(){
        var r_occupation = $(this).val();
        //alert(r_occupation);
        if(r_occupation=='Others'){
            $("#referencation_occupation_box").show();
        }else{
          $("#referencation_occupation_box").hide();
        }

    });

    // Referencation Country
    $(".reference_country").on('change',function(){
        var reference_country = $(this).val();
        //alert(r_occupation);
        if(reference_country=='Others'){
            $("#reference_country_box").show();
        }else{
          $("#reference_country_box").hide();
        }

    });

    // Gender Country
    $(".gender").on('change',function(){
        var gender = $(this).val();
        //alert(r_occupation);
        if(gender=='Others'){
            $("#gender_box").show();
        }else{
          $("#gender_box").hide();
        }

    });

    // Religion
    $(".religion").on('change',function(){
        var religion = $(this).val();
        //alert(r_occupation);
        if(religion=='Others'){
            $("#religion_box").show();
        }else{
          $("#religion_box").hide();
        }

    });

    // Blood
    $(".blood").on('change',function(){
        var blood = $(this).val();
        //alert(r_occupation);
        if(blood=='Others'){
            $("#blood_box").show();
        }else{
          $("#blood_box").hide();
        }

    });

    // Marital Status
    $(".marital_status").on('change',function(){
        var marital_status = $(this).val();
        //alert(r_occupation);
        if(marital_status=='Others'){
            $("#marital_status_box").show();
        }else{
          $("#marital_status_box").hide();
        }

    });

    // Father Occupation
    $(".father_occupation").on('change',function(){
        var father_occupation = $(this).val();
        //alert(r_occupation);
        if(father_occupation=='Others'){
            $("#father_occupation_box").show();
        }else{
          $("#father_occupation_box").hide();
        }

    });

    // Mother Occupation
    $(".mother_occupation").on('change',function(){
        var mother_occupation = $(this).val();
        //alert(r_occupation);
        if(mother_occupation=='Others'){
            $("#mother_occupation_box").show();
        }else{
          $("#mother_occupation_box").hide();
        }

    });



    // Ielts Certificaed

    $("#ielts").on('change',function(){
        var ielts_value = $(this).val();
        //alert(ielts_value);
        if(ielts_value=='Yes'){
            // $("#certificated_box").show();
            $("#ielts_certi").show();
        }else if(ielts_value=='No'){
            // $("#certificated_box").hide();
            $("#ielts_certi").hide();
        }else{
          // $("#certificated_box").hide();
          $("#ielts_certi").hide();
        }

    });

    $(".language").on('change',function(){
        var language = $(this).val();
        //alert(spoken_value);
        if(language=='Others'){
            $("#language_box").show();
        }else{
          $("#language_box").hide();
        }

    });

     $(".previus_passport").on('change',function(){
        var previus_passport = $(this).val();
        //alert(spoken_value);
        if(previus_passport=='Yes'){
            $("#previus_passport_box").show();
        }else if(previus_passport=='No'){
            $("#previus_passport_box").hide();
        }else{
          $("#previus_passport_box").hide();
        }

    });


     // Visa type

     $(".visa_type").on('change',function(){
        var visa_type = $(this).val();
        //alert(spoken_value);
        if(visa_type=='Others'){
            $("#visa_type_box").show();
        }else{
          $("#visa_type_box").hide();
        }

    });

     // Visa Category

     $(".visa_category").on('change',function(){
        var visa_category = $(this).val();
        //alert(spoken_value);
        if(visa_category=='Others'){
            $("#visa_category_box").show();
        }else{
          $("#visa_category_box").hide();
        }

    });


      // Apply Under

     $(".apply_under").on('change',function(){
        var apply_under = $(this).val();
        //alert(spoken_value);
        if(apply_under=='Others'){
            $("#apply_under_box").show();
        }else{
          $("#apply_under_box").hide();
        }

    });

    // place_stay

     $(".place_stay").on('change',function(){
        var place_stay = $(this).val();
        //alert(spoken_value);
        if(place_stay=='Others'){
            $("#place_stay_box").show();
        }else{
          $("#place_stay_box").hide();
        }

    });



     // Flight Reservation
      $(".fligt_reservatoin").on('change',function(){
        var flight_reservation = $(this).val();
        //alert(flight_reservation);
        if(flight_reservation=='Yes'){
            $("#flight_reservation_file").show();
        }else if(flight_reservation=='No'){
            $("#flight_reservation_file").hide();
        }else{
          $("#flight_reservation_file").hide();
        }

    });


    // Inspection card
      $(".inspection_card").on('change',function(){
        var inspection_card = $(this).val();
        //alert(flight_reservation);
        if(inspection_card=='Yes'){
            $("#inspection_card_file").show();
        }else if(inspection_card=='No'){
            $("#inspection_card_file").hide();
        }else{
          $("#inspection_card_file").hide();
        }

    });

      // Inspection card
      $(".invitation_letter").on('change',function(){
        var invitation_letter = $(this).val();
        //alert(flight_reservation);
        if(invitation_letter=='Yes'){
            $("#invitation_letter_file").show();
        }else if(invitation_letter=='No'){
            $("#invitation_letter_file").hide();
        }else{
          $("#invitation_letter_file").hide();
        }

    });

    // utility_bill
      $(".utility_bill").on('change',function(){
        var utility_bill = $(this).val();
        //alert(flight_reservation);
        if(utility_bill=='Yes'){
            $("#utility_bill_file").show();
        }else if(utility_bill=='No'){
            $("#utility_bill_file").hide();
        }else{
          $("#utility_bill_file").hide();
        }

    });

    // police_clearance
      $(".police_clearance").on('change',function(){
        var police_clearance = $(this).val();
        //alert(flight_reservation);
        if(police_clearance=='Yes'){
            $("#police_clearance_file").show();
        }else if(police_clearance=='No'){
            $("#police_clearance_file").hide();
        }else{
          $("#police_clearance_file").hide();
        }

    });

    // bank_statement
      $(".bank_statement").on('change',function(){
        var bank_statement = $(this).val();
        //alert(flight_reservation);
        if(bank_statement=='Yes'){
            $("#bank_statement_file").show();
        }else if(bank_statement=='No'){
            $("#bank_statement_file").hide();
        }else{
          $("#bank_statement_file").hide();
        }

    });

    // bank_solvency
      $(".bank_solvency").on('change',function(){
        var bank_solvency = $(this).val();
        //alert(flight_reservation);
        if(bank_solvency=='Yes'){
            $("#bank_solvency_file").show();
        }else if(bank_solvency=='No'){
            $("#bank_solvency_file").hide();
        }else{
          $("#bank_solvency_file").hide();
        }

    });


    // owership_status
      $(".owership_status").on('change',function(){
        var owership_status = $(this).val();
        //alert(owership_status);
        if(owership_status==='1'){
            $("#ower_box").hide();
        }else if(owership_status==='2'){
            $("#ower_box").hide();
        }else if(owership_status==='3'){
            $("#ower_box").show();
        }else{
          $("#ower_box").hide();
        }

    });

    // person_relationship
      $(".person_relationship").on('change',function(){
        var person_relationship = $(this).val();
        //alert(owership_status);
        if(person_relationship==='1'){

            $("#person_relationship_box").show();
            $("#relation_name").text("Mother's Name *");
            $("#relation_nid").text("Mother's Nid Number *");

        }else if(person_relationship==='2'){
            $("#person_relationship_box").show();
            $("#relation_name").text("Father's Name *");
            $("#relation_nid").text("Father's Nid Number *");
        }else{
          $("#person_relationship_box").hide();
        }

    });

    // sabing_income
      $(".sabing_income").on('change',function(){
        var sabing_income = $(this).val();
        //alert(sabing_income);
        if(sabing_income==='1'){
            $("#other_regular_income").show();
        }else if(sabing_income==='2'){
            $("#how_much_money").show();
        }else if(sabing_income==='2'){
            $("#other_regular_income").hide();
            $("#how_much_money").hide();
        }else{
        
        }

    });


    // FIle UPload
    var title = $(".ielts_certificated_title");
    $(".ielts_certificated_file").on("change", function () {
      value = $(".ielts_certificated_file").val();
      startIndex = 12;
      endIndex = value.length;
      value = value.substring(startIndex, endIndex);
      title.html(value);
    });

    var title1 = $(".spoken_language_title");
    $(".spoken_language_file").on("change", function () {
      value = $(".spoken_language_file").val();
      startIndex = 12;
      endIndex = value.length;
      value = value.substring(startIndex, endIndex);
      title1.html(value);
    });

    var title2 = $(".previus_passport_title");
    $(".previus_passport_file").on("change", function () {
      value = $(".previus_passport_file").val();
      startIndex = 12;
      endIndex = value.length;
      value = value.substring(startIndex, endIndex);
      title2.html(value);
    });



});


