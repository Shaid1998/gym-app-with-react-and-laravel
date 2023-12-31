@extends('admin.admin_dashboard')
@section('admin')


<div class="page-content">
	<div class="row row-cols-1 row-cols-md-2 row-cols-xl-4">
		<div class="col">
			<div class="card radius-10 bg-gradient-orange">
				<div class="card-body">
					<div class="d-flex align-items-center">
						<h5 class="mb-0 text-white">$33000 USD</h5>
						<div class="ms-auto">
							<i class='bx bx-dollar fs-3 text-white'></i>
						</div>
					</div>
					<div class="progress my-3 bg-light-transparent" style="height:3px;">
						<div class="progress-bar bg-white" role="progressbar" style="width: 55%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
					</div>
					<div class="d-flex align-items-center text-white">
						<p class="mb-0">This month income</p>
						<p class="mb-0 ms-auto">+1.2%<span><i class='bx bx-up-arrow-alt'></i></span></p>
					</div>
				</div>
			</div>
		</div>
		<div class="col">
			<div class="card radius-10 bg-gradient-ohhappiness">
				<div class="card-body">
					<div class="d-flex align-items-center">
						<h5 class="mb-0 text-white">$125243251 USD</h5>
						<div class="ms-auto">
							<i class='bx bx-group fs-3 text-white'></i>
						</div>
					</div>
					<div class="progress my-3 bg-light-transparent" style="height:3px;">
						<div class="progress-bar bg-white" role="progressbar" style="width: 55%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
					</div>
					<div class="d-flex align-items-center text-white">
						<p class="mb-0">this Year Income</p>
						<p class="mb-0 ms-auto">+5.2%<span><i class='bx bx-up-arrow-alt'></i></span></p>
					</div>
				</div>
			</div>
		</div>
		<div class="col">
			<div class="card radius-10 bg-gradient-ibiza">
				<div class="card-body">
					<div class="d-flex align-items-center">
						<h5 class="mb-0 text-white">$254352 USD</h5>
						<div class="ms-auto">
							<i class='bx bx-envelope fs-3 text-white'></i>
						</div>
					</div>
					<div class="progress my-3 bg-light-transparent" style="height:3px;">
						<div class="progress-bar bg-white" role="progressbar" style="width: 55%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
					</div>
					<div class="d-flex align-items-center text-white">
						<p class="mb-0">Total Spend Of this Year</p>
						<p class="mb-0 ms-auto">+2.2%<span><i class='bx bx-up-arrow-alt'></i></span></p>
					</div>
				</div>
			</div>
		</div>
		<div class="col">
			<div class="card radius-10 bg-gradient-ibiza">
				<div class="card-body">
					<div class="d-flex align-items-center">
						<h5 class="mb-0 text-white">7911</h5>
						<div class="ms-auto">
							<i class='bx bx-envelope fs-3 text-white'></i>
						</div>
					</div>
					<div class="progress my-3 bg-light-transparent" style="height:3px;">
						<div class="progress-bar bg-white" role="progressbar" style="width: 55%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
					</div>
					<div class="d-flex align-items-center text-white">
						<p class="mb-0">Total Member</p>
						<p class="mb-0 ms-auto">+2.2%<span><i class='bx bx-up-arrow-alt'></i></span></p>
					</div>
				</div>
			</div>
		</div>
	</div><!--end row-->
	<div class="card radius-10">
		<div class="card-body">
			<div class="d-flex align-items-center">
				<div>
					<h5 class="mb-0">Staff List</h5>
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
							<th>Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Action</th>
						</tr>
					</thead>
					@foreach ($data as $data)
						<tbody>
							<tr>
								<td>{{$data->id}}</td>
								<td>{{$data->fname}} {{$data->lname}}</td>
								<td>{{$data->email}}</td>
								<td>{{$data->phone}}</td>
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