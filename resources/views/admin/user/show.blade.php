
@extends('admin.layouts.master')

@section('header-script')

@endsection

@section('body-section')
<br>
 <section class="input-validation dashboard-analytics">


    <div class="row">
          <div class="col-12">
              <div class="card">
                  <div class="card-header">
                  <div class="col-xs-12 col-sm-12 col-md-12">
                      <div class="form-group">
                          <strong>First Name:</strong>
                          {{ $user->first_name }}
                      </div>
                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-12">
                      <div class="form-group">
                          <strong>Last Name:</strong>
                          {{ $user->last_name }}
                      </div>
                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-12">
                      <div class="form-group">
                          <strong>Email:</strong>
                          {{ $user->email }}
                      </div>
                  </div>
              </div>
              </div>
          </div>
        </div>
</section>

@endsection


@section('footer-section')
@endsection

@section('footer-script')


<script>



  $(function () {
    $("#example1").DataTable({
      "responsive": true, "lengthChange": false, "autoWidth": false,
      "buttons": []
    }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
    $('#example2').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": false,
      "responsive": true,
    });
  });
</script>

<script type="text/javascript">

 var APP_URL = {!! json_encode(url('/')) !!}




</script>

@endsection
