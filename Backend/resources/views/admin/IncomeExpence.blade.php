@extends('admin.admin_dashboard')
@section('admin')

<div class="page-content">
	<div class="card radius-10">
		<div class="card-body">
			<div class="d-flex align-items-center">
				<div>
					<h5 class="mb-0">This Month Income</h5>
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
							<th>Month</th>
							<th>Source</th>
							<th>Amount</th>
						</tr>
					</thead>
					@foreach ($data2 as $data2)
                        <tbody>
                            <tr>
                                <td>{{$data2->id}}</td>
                                <td>{{$data2->created_at}}</td>
                                <td>{{$data2->Month}}</td>
                                <td>{{$data2->Source}}</td>
                                <td>{{$data2->Amount}}</td>
                            </tr>
                        </tbody>
                    @endforeach
				</table>
			</div>
		</div>
	</div>
    <div class="card radius-10">
		<div class="card-body">
			<div class="d-flex align-items-center">
				<div>
					<h5 class="mb-0">Total Expence</h5>
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
							<th>Sector</th>
							<th>Amount</th>
						</tr>
					</thead>
					@foreach ($data as $data)
                        <tbody>
                            <tr>
                                <td>{{$data->id}}</td>
                                <td>{{$data->created_at}}</td>
                                <td>{{$data->Month}}</td>
                                <td>{{$data->Sector}}</td>
                                <td>{{$data->Amount}}</td>
                            </tr>
                        </tbody>
                    @endforeach
				</table>
			</div>
		</div>
	</div>
    <div class="card radius-10">
		<div class="card-body">
			<div class="d-flex align-items-center">
				<div>
					<h5 class="mb-0">Total Yearly Account</h5>
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
							<th>Status</th>
							<th>January</th>
							<th>February</th>
							<th>March</th>
							<th>April</th>
							<th>May</th>
							<th>June</th>
							<th>July</th>
							<th>August</th>
							<th>September</th>
							<th>October</th>
							<th>November</th>
							<th>December</th>
						</tr>
					</thead>
                    @foreach ($data3 as $data3)
                        <tbody>
                            <tr>
                                <td>{{$data->id}}</td>
                                <td>{{$data->status}}</td>
                                <td>{{$data->January}}</td>
                                <td>{{$data->February}}</td>
                                <td>{{$data->March}}</td>
                                <td>{{$data->May}}</td>
                                <td>{{$data->June}}</td>
                                <td>{{$data->July}}</td>
                                <td>{{$data->August}}</td>
                                <td>{{$data->September}}</td>
                                <td>{{$data->October}}</td>
                                <td>{{$data->November}}</td>
                                <td>{{$data->December}}</td>
                            </tr>
                        </tbody>
                    @endforeach
				</table>
			</div>
		</div>
	</div>
</div>

@endsection