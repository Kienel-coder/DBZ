//<!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
//<!-- //               jQuery CDN - Ovládání rozšiřování a collapse bočního panelu  (možno i tlačítkem)           // -->
//<!-- //     Zde ovládání tlačítkem nevyužívám (button je skrytý v html:  type="button" id="sidebarCollapse")     // -->
//<!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

$(document).ready(function () 
{
    $('#sidebarCollapse').on('click', function () 
    {
       $('#sidebar').toggleClass('active');
    });
});

//Zde boční panel nevyužívám (button je skrytý)
$('#sidebar').toggleClass('active'); 


//A Takto by script vypadal zapsaný do html5
/* <script type="text/javascript">
        $(document).ready(function () 
        {
            $('#sidebarCollapse').on('click', function () 
            {
                $('#sidebar').toggleClass('active');
            });
        });
</script>

<!-- Zde boční panel nevyužívám (button je skrytý)-->
<script> $('#sidebar').toggleClass('active');</script>*/