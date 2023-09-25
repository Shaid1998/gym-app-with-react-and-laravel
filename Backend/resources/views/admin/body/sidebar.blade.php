<div class="sidebar-wrapper" data-simplebar="true">
	@php
	$id = Auth::user()->id;
	$adminData = App\Models\User::find($id);

@endphp	
			<div class="sidebar-header">
				<div>
					<img src="{{ asset('adminbackend/assets/images/logo-icon.png') }}" class="logo-icon" alt="logo icon">
				</div>
				<div>
					<h4 class="logo-text">{{$adminData->name}}</h4>
				</div>
				<div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
				</div>
			</div>
			<!--navigation-->
			<ul class="metismenu" id="menu">

					<li>
					<a href="{{ route('admin.dashobard') }}">
						<div class="parent-icon"><i class='bx bx-home-circle'></i>
						</div>
						<div class="menu-title">Dashboard</div>
					</a>
				</li>
				<li>
					<a href=" {{ route('subscriber.data') }} ">
						<div class="parent-icon"><i class="fa fa-block fa-check"></i>
						</div>
						<div class="menu-title">Response</div>
					</a>
				</li>
				<li>
					<a href=" {{ route('income.expence.data') }} ">
						<div class="parent-icon"><i class="fas fa-dollar-sign"></i>
						</div>
						<div class="menu-title">Earning</div>
					</a>
				</li>
			</ul>
			<!--end navigation-->
		</div>