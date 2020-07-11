ActiveAdmin.register_page "Dashboard" do
 
  content title: proc { I18n.t("active_admin.dashboard") } do
    

    # Here is an example of a simple dashboard with columns and panels.
    #
    columns do
    column do
      panel 'Usuarios ' do
        ul do
           User.last(5).map do |user|
            li user.email
          end
        end
      end
    end
    column do
      panel 'Ultimas Ordenes' do
        ul do
          Order.last(5).map do |order|
            li "Usuario #{order.user.email}, pagado: #{order.payed}"
          end
        end
      end
    end
  end
  end # content
end
