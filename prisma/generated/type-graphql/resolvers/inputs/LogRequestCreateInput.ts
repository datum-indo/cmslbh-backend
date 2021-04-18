import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateNestedOneWithoutLogRequestInput } from "../inputs/ApplicationCreateNestedOneWithoutLogRequestInput";
import { ClientCreateNestedManyWithoutLogRequestInput } from "../inputs/ClientCreateNestedManyWithoutLogRequestInput";
import { LogRequestAppCreateNestedManyWithoutLogRequestIdInput } from "../inputs/LogRequestAppCreateNestedManyWithoutLogRequestIdInput";
import { NetworkCreateNestedOneWithoutLogRequestInput } from "../inputs/NetworkCreateNestedOneWithoutLogRequestInput";
import { PersonCreateNestedOneWithoutLogRequestInput } from "../inputs/PersonCreateNestedOneWithoutLogRequestInput";
import { RenamedcaseCreateNestedOneWithoutLogRequestsInput } from "../inputs/RenamedcaseCreateNestedOneWithoutLogRequestsInput";
import { UserCreateNestedOneWithoutLogRequestByInput } from "../inputs/UserCreateNestedOneWithoutLogRequestByInput";
import { UserCreateNestedOneWithoutLogRequestToInput } from "../inputs/UserCreateNestedOneWithoutLogRequestToInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  isiRequest?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  jenisRequest?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statusRequest?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tanggapanRequest?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tanggapanRequestIsi?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  tglExpired?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  tglRequest?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  tglRespon?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateNestedOneWithoutLogRequestInput, {
    nullable: true
  })
  applicationId?: ApplicationCreateNestedOneWithoutLogRequestInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateNestedOneWithoutLogRequestsInput, {
    nullable: true
  })
  caseId?: RenamedcaseCreateNestedOneWithoutLogRequestsInput | undefined;

  @TypeGraphQL.Field(_type => NetworkCreateNestedOneWithoutLogRequestInput, {
    nullable: true
  })
  networkId?: NetworkCreateNestedOneWithoutLogRequestInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateNestedOneWithoutLogRequestInput, {
    nullable: true
  })
  personId?: PersonCreateNestedOneWithoutLogRequestInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLogRequestByInput, {
    nullable: true
  })
  requestBy?: UserCreateNestedOneWithoutLogRequestByInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLogRequestToInput, {
    nullable: true
  })
  requestTo?: UserCreateNestedOneWithoutLogRequestToInput | undefined;

  @TypeGraphQL.Field(_type => LogRequestAppCreateNestedManyWithoutLogRequestIdInput, {
    nullable: true
  })
  pp?: LogRequestAppCreateNestedManyWithoutLogRequestIdInput | undefined;

  @TypeGraphQL.Field(_type => ClientCreateNestedManyWithoutLogRequestInput, {
    nullable: true
  })
  Client?: ClientCreateNestedManyWithoutLogRequestInput | undefined;
}
