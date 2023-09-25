@extends('admin.subscriber_data')
@section('sub_admin')


<div class="page-content">
	<div class="card radius-10">
		<div class="card-body">
			<div class="d-flex align-items-center">
				<div>
					<h5 class="mb-0">Subscriber Request's Data</h5>
				</div>
				<div class="font-22 ms-auto"><i class="bx bx-dots-horizontal-rounded"></i>
				</div>
			</div>
			<hr>
			<div class="table-responsive">
				<table class="table align-middle mb-0">
					<thead class="table-light">
						<tr>
							<th>Sl</th>
							<th>Date</th>
							<th>Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					@foreach ($data as $data)
						<tbody>
							<tr>
								<td>{{$data->id}}</td>
								<td>{{$data->created_at}}</td>
								<td>{{$data->users_fname}} {{$data->users_lname}}</td>
								<td>{{$data->users_email}}</td>
								<td>{{$data->users_phone}}</td>
								<td>{{$data->req_status}}</td>
								<td>
									<button class="btn btn-success"  >ADD</button>
									<button class="btn btn-danger"  >CUT</button>
								</td>
							</tr>
						</tbody>
					@endforeach
					
				</table>
			</div>
		</div>
	</div>
</div>

@endsection