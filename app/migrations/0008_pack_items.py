# Generated by Django 4.2.11 on 2024-04-13 07:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_alter_product_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='pack_items',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('price', models.FloatField()),
            ],
        ),
    ]
